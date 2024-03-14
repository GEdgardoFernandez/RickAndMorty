import './App.css';
import { Routes, Route } from 'react-router-dom';
import Landing from './Views/Landing.jsx';
import Home from './Views/Home.jsx';
import About from './Views/About.jsx';
import Details from './Views/Details.jsx';
import Favorites from './Views/Favorites.jsx';

function App() {

   return ( 
      <div className='App' data-theme='dark'>
         <Routes>
         <Route path='/' element={<Landing />}/>

         <Route path='/home' element={<Home />}/>

         <Route path='/about' element={<About />}/>

         <Route path='/details/:id' element={<Details />}/>

         <Route path='/favorites' element={<Favorites />}/>
         </Routes>
      </div>
   );
}

export default App;
