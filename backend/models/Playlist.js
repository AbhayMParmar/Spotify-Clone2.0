import mongoose from "mongoose";

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    songs: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Song",
        },
    ],
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
}, {
    timestamps: true,
});

const Playlist = mongoose.model("Playlist", schema);
export default Playlist;
