import style from './searchbar.module.css';
import { setSearchTerm } from '../../Redux/Actions';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

export default function SearchBar(props) {
   const [search, setSearch] = useState('');
   const dispatch = useDispatch();

   const handleSearch = async () => {
      try {
         await dispatch(setSearchTerm(search));
      } catch (error) {
         console.error('Error occurred while searching:', error);
      }
   };

   return (
      <div className={style.container}>
         <input
            className={style.input}
            type='text'
            name='search'
            placeholder='Search Character'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
         />
         <button className={style.button} onClick={handleSearch}>Search</button>
      </div>
   );
}
