import React, { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Landing from './Views/Landing.jsx';
import Home from './Views/Home.jsx';
import About from './Views/About.jsx';
import Favorites from './Views/Favorites.jsx';
import Details from './Views/Details.jsx';

function App() {
   const [darkMode, setDarkMode] = useState(false);

   return (
      <div className={`App ${darkMode ? 'dark-mode' : ''}`} data-theme={darkMode ? 'dark' : 'light'}>
         <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/home' element={<Home darkMode={darkMode} setDarkMode={setDarkMode} />} />
            <Route path='/about' element={<About />} />
            <Route path='/favorites' element={<Favorites />} />
            <Route path='/details' element={<Details />} />
         </Routes>
      </div>
   );
}

export default App;