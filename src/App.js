import './App.css';
import { Routes, Route } from 'react-router-dom';
import Landing from './views/Landing.jsx';
import Home from './views/Home.jsx';
import About from './views/About.jsx';

function App() {

   return ( 
      <div className='App' data-theme='dark'>
         <Routes>
         <Route path='/' element={<Landing />}/>

         <Route path='/home' element={<Home />}/>

         <Route path='/about' element={<About />}/>

         </Routes>
      </div>
   );
}

export default App;
