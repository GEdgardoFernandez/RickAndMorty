import Card from '../card/Card.jsx';
import { useEffect, useState } from 'react';
import NavPage from '..//navpage/navpage.jsx';
import style from './cards.module.css'
const Cards = function(props) {
   const [page, setPage] = useState(1);
   const [characters, setCharacters] = useState([]);
   useEffect(() => {
      async function fetchData() {
         const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
         const data = await response.json();
         setCharacters(data.results);
      }
      fetchData();
   }, [page]);
   return <div className='container'>
      {
         characters.map((character) => {
            return <Card
               key={character.id}
               name={character.name}
               status={character.status}
               species={character.species}
               gender={character.gender}
               origin={character.origin.name}
               image={character.image}
               onClose={() => window.alert('Emulamos que se cierra la card')}
            />
         })
      }
       <NavPage page={page} setPage={setPage}/>
   </div>;
  
}

export default Cards;