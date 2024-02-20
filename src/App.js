import './App.css';
import Cards from './components/cards/Cards.jsx';
import Footer from './components/footer/Footer.jsx';
import SearchBar from './components/searchbar/SearchBar.jsx';
import Menu from './components/menu/Menu.jsx';
import characters from './data.js';

function App() {
   return (
      <div className='App'>
         <div className='header'>
         <Menu />
         <SearchBar onSearch={(characterID) => window.alert(characterID)} />
         </div>
         <div className='container'> 
         <Cards characters={characters} />
         
         </div>
         <div className='footer'>
            <Footer /> 
         </div>
      </div>
   );
}

export default App;
