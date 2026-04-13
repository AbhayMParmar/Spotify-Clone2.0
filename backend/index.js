import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import userRoutes from './routes/userRoutes.js';
import songRoutes from './routes/songRoutes.js';
import playlistRoutes from './routes/playlistRoutes.js';
import cloudinary from 'cloudinary';
import { User } from './models/User.js';
import bcrypt from 'bcrypt';

dotenv.config();

cloudinary.v2.config({
  cloud_name: process.env.Cloud_Name,
  api_key: process.env.Cloud_Api,
  api_secret: process.env.Cloud_Secret,
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? false 
    : ['http://localhost:5173', 'http://localhost:3000'],
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// Session middleware
app.use(session({
  secret: process.env.SESSION_SECRET || 'your-secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false, maxAge: 24 * 60 * 60 * 1000 } // 24 hours
}));

// Serve static files from React build in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/dist')));
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
  });
}

// API Routes
app.use('/api/user', userRoutes);
app.use('/api/song', songRoutes);
app.use('/api/playlist', playlistRoutes);

app.get('/api/health', (req, res) => {
  res.json({ message: 'Server is running!', status: 'OK' });
});

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI || process.env.MONGO_URI || 'mongodb://localhost:27017/Spotifyclone', {
  dbName: "Spotifyclone",
})
  .then(async () => {
    console.log('Connected to MongoDB');
    
    // Create default admin if it doesn't exist
    const adminEmail = "admin@gmail.com";
    const adminExists = await User.findOne({ email: adminEmail });
    
    if (!adminExists) {
      const hashPassword = await bcrypt.hash("Admin@123", 10);
      await User.create({
        name: "Default Admin",
        email: adminEmail,
        password: hashPassword,
        role: "admin"
      });
      console.log('Default admin account created: admin@gmail.com / Admin@123');
    }
  })
  .catch(err => console.error('MongoDB connection error:', err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});