import React, { Suspense } from 'react';
import Menu from "../components/menu/Menu";
import Switch from "../components/switch/Switch";
import Footer from "../components/footer/Footer";
import Cards from "../components/cards/Cards";
import Load from './Loading';
const Home = ({ darkMode, setDarkMode }) => {
   return (
      <>
         <Suspense fallback={<Load />}>
            <div className='header'>
               <Menu />
               <Switch darkMode={darkMode} setDarkMode={setDarkMode} />
            </div>
            <div className='container'>
               <Cards />
            </div>
            <Footer />
         </Suspense>
      </>

   );
}

export default Home;
