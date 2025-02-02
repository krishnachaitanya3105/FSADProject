import React, { useState } from "react";

function Settings({ onClose }) {
  const [darkMode, setDarkMode] = useState(false);

  function toggleTheme() {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.body.style.backgroundColor = "#1a1a1a"; 
      document.body.style.color = "#ffffff"; 

      const modal = document.querySelector('.settings-modal');
      
      if (modal) {
        modal.style.color = "#000000"; 
      }


    } else {
      document.body.style.backgroundColor = "#ffffff"; 
      document.body.style.color = "#000000"; 

      const modal = document.querySelector('.settings-modal');
      if (modal) {
        modal.style.color = "#000000";  
      }


      

    }
  }

  return (
    <div className="settings-modal">  
      <div className="overlay" onClick={onClose}></div>
      <div className="settings-window">
        <h2>Settings</h2>
        <div className="theme-toggle">
          <label>Dark Mode</label>
          <input type="checkbox" checked={darkMode} onChange={toggleTheme} />
        </div>
        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Settings;
