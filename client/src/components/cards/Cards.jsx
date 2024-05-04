import Card from '../card/Card.jsx';
import { useEffect, useState } from 'react';
import NavPage from '..//navpage/navpage.jsx';

const Cards = function (props) {
   const [page, setPage] = useState(1);
   const [characters, setCharacters] = useState({});
   const [searchTerm, setSearchTerm] = useState('');

   useEffect(() => {
      async function fetchData() {
         const response = await fetch(`http://localhost:3001/rickandmorty/character/${page}`);
         console.log("Response:", response);
         const data = await response.json();
         console.log("Data:", data);
         setCharacters(data);
      }
      fetchData();
   }, [page]);
   console.log("Characters:", characters);
   /*    const filteredCharacters = characters.filter(character =>
         character.name.toLowerCase().includes(searchTerm.toLowerCase())
      ); */

   return (
      <div className="containerMain">
         <div >
            <input
               type="text"
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
               className="search"
               placeholder="Search Character"
            />
         </div>
         <div>
            <NavPage page={page} setPage={setPage} />
         </div>
         {/*          <div className="container">
            {
               filteredCharacters.map((character) => (
                  <Card
                     key={character.id}
                     id={character.id}
                     name={character.name}
                     status={character.status}
                     species={character.species}
                     gender={character.gender}
                     origin={character.origin.name}
                     image={character.image}
                     episode={character.episode}
                     onClose={() => window.alert('Emulamos que se cierra la card')}
                  />
               ))
            }
         </div> */}
         <div className="container">
            {characters ? <Card
               key={characters.id}
               id={characters.id}
               name={characters.name}
               status={characters.status}
               species={characters.species}
               gender={characters.gender}
               origin={characters.origin?.name}
               image={characters.image}
               episode={characters.episode}
               onClose={() => window.alert('Emulamos que se cierra la card')}
            /> : <div>Cargando...</div>}
         </div>
         <div>
            <NavPage page={page} setPage={setPage} />
         </div>
      </div>
   );
}

export default Cards;