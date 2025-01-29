import React from 'react';
import { BrowserRouter as Router,Routes,Link,Route} from "react-router-dom";
import Home from "./Home.jsx"
import Library from "./Library.jsx"
import Podcasts from "./Podcasts.jsx"
import './App.css';
import Photo from './assets/Logo.png'
import User from './assets/user.jpg'





function App() {
 

  return (
    
    <Router>
      <nav>
        <img src={Photo} />
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/Library">Library</Link></li>
              <li><Link to="/Podcasts">Podcasts</Link></li>
              
              
            </ul>

            <input type="text" placeholder='Search for a song' className='search' />

            <img src={User} />
      </nav>

      <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Library" element={<Library/>}/>
            <Route path="/Podcasts" element={<Podcasts/>}/>
      </Routes>


    </Router>
    
  )
}

export default App
