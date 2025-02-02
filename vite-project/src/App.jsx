import React,{useState,useContext} from 'react';
import { BrowserRouter as Router,Routes,Link,Route} from "react-router-dom";

import Home from "./Home.jsx"
import Library from "./Library.jsx"
import Podcasts from "./Podcasts.jsx"
import './App.css';
import Photo from './assets/Logo.png'
import User from './assets/user.jpg'
import Settings from './Settings.jsx';

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
 
  return ( 
    <Router>
      <nav>
        <img src={Photo} alt='Logo'/>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/Library">Library</Link></li>
              <li><Link to="/Podcasts">Podcasts</Link></li>   
            </ul>

            <input type="text" placeholder='Search for a song' className='search' />

         <div className='profile-container'>
            <img src={User} alt="User Profile" onClick={()=>setShowPopup(!showPopup)} />


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
            <Route path="/" element={<Home/>}/>
            <Route path="/Library" element={<Library/>}/>
            <Route path="/Podcasts" element={<Podcasts/>}/>
            
      </Routes>
      {showSettings && <Settings onClose={() => setShowSettings(false)} />}


    </Router>
    
  )
}

export default App
