import React from 'react'
import { Link } from 'react-router-dom';

function NavBar() {

    const handleLogout = () => {
        localStorage.removeItem("jwtToken");
        localStorage.removeItem("expiryDate");
        localStorage.removeItem("uid");
        window.location.href = "/";
    };
    return (
        <div className="h-20 bg-gradient-to-r from-blue-800 to-purple-700 flex items-center justify-between px-6 shadow-lg">
        <div className="flex items-center">
            <img
                src="https://i.ibb.co/fSNP7Rz/icons8-chatgpt-512.png"
                alt="Chatbot"
                className="rounded-full h-10 w-10 mr-3 border border-blue-300"
            />
            <div>
                <span className="text-white font-bold text-lg">File Sharing</span>
                <p className="text-sm text-white">Welcome to our File Sharing</p>
            </div>
        </div>
        <div className="hidden md:flex items-center space-x-4">
            <Link
                to="/home"
                className="text-white text-sm font-medium border border-white rounded-full px-4 py-1 hover:bg-white hover:text-blue-800 transition duration-300 shadow-lg"
            >
                Home
            </Link>
            <Link
                to="/home/links"
                className="text-white text-sm font-medium border border-white rounded-full px-4 py-1 hover:bg-white hover:text-blue-800 transition duration-300 shadow-lg"
            >
                Links
            </Link>
            <button
                onClick={handleLogout}
                className="text-white text-sm font-medium border border-red-500 bg-gradient-to-r from-red-500 to-red-700 rounded-full px-4 py-1 hover:bg-red-600 hover:from-red-600 hover:to-red-800 hover:text-white transition duration-300 transform hover:scale-105 shadow-lg"
            >
                Logout
            </button>
        </div>
        <div className="flex md:hidden items-center">
            <button
                className="text-white text-sm font-medium border border-white rounded-full px-3 py-1 hover:bg-white hover:text-blue-800 transition duration-300 shadow-lg"
            >
                Menu
            </button>
        </div>
    </div>
    
    )
}

export default NavBar