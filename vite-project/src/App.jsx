import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "./Home.jsx";
import Library from "./Library.jsx";
import Podcasts from "./Podcasts.jsx";
import Login from "./Login.jsx"; 
import './App.css';
import Photo from './assets/Logo.png';
import User from './assets/user.jpg';
import Settings from './Settings.jsx';
import AdminDashboard from "./AdminDashboard.jsx";


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); 
  const [showPopup, setShowPopup] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true); 
  };

  return (
    <>
      <Router>
        {!isAuthenticated ? (
          
          <Routes>
            <Route path="/" element={<Login onLogin={handleLogin} />} />
          </Routes>
        ) : (
          
          <>
            <nav>
              <img src={Photo} alt="Logo" />
              <ul>
               <li><Link to="/">Home</Link></li>
               <li><Link to="/Library">Library</Link></li>
               <li><Link to="/Podcasts">Podcasts</Link></li>
              </ul>
              <input type="text" placeholder="Search for a song" className="search" />
              <div className="profile-container">
                <img src={User} alt="User Profile" onClick={() => setShowPopup(!showPopup)} />
                {showPopup && (
                  <div className="popup">
                    <button
                      className="popup-item"
                      onClick={() => {
                        setShowSettings(true);
                        setShowPopup(false);
                      }}
                    >
                      ⚙️ Settings
                    </button>
                  </div>
                )}
              </div>
            </nav>

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Library" element={<Library />} />
              <Route path="/Podcasts" element={<Podcasts />} />
              <Route path="/admin-dashboard" element={<AdminDashboard />} /> 
            </Routes>

            {showSettings && <Settings onClose={() => setShowSettings(false)} />}

            <footer>
  <p className="footer">
  © 2025 My Music Platform. All rights reserved | Enjoy endless music, anytime, anywhere.
  </p>
</footer>
          </>
          
        )}
      </Router>
     
    </>
  );
}

export default App;
