import React from "react";
import Login from "./pages/Login";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from "./pages/Home";
import Register from "./pages/Register";
import { UserData } from "./context/User";
import Loading from "./components/Loading";
import Admin from "./pages/Admin";
import PlayList from "./pages/PlayList";
import Album from "./pages/Album";
import SearchPage from "./components/SearchPage";

function App() {
    const { loading, user, isAuth } = UserData();
    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={isAuth ? <Home /> : <LandingPage />} />
                        <Route path="/playlist" element={isAuth ? <PlayList user={user} /> : <Navigate to="/" />} />
                        <Route
                            path="/album/:id"
                            element={isAuth ? <Album user={user} /> : <Navigate to="/" />}
                        />
                        <Route path="/admin" element={isAuth ? <Admin /> : <Navigate to="/" />} />
                        <Route path="/login" element={isAuth ? <Navigate to="/" /> : <Login />} />
                        <Route path="/register" element={isAuth ? <Navigate to="/" /> : <Register />} />
                        <Route path="/search" element={isAuth ? <SearchPage /> : <Navigate to="/" />} />
                    </Routes>
                </BrowserRouter>
            )}
        </>
    );
}

export default App;