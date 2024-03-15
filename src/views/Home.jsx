import React from 'react';
import Menu from "../components/menu/Menu";
import Switch from "../components/switch/Switch";
import Footer from "../components/footer/Footer";
import Cards from "../components/cards/Cards";
import characters from "../data.js";

const Home = ({ darkMode, setDarkMode }) => {
   return ( 
      <>
         <div className='header'>
            <Menu />
            <Switch darkMode={darkMode} setDarkMode={setDarkMode} />
         </div>
         <div className='container'>
            <Cards characters={characters} />
         </div>
         <Footer />
      </>
   );
}

export default Home;
