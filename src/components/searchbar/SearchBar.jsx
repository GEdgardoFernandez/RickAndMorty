import style from './searchbar.module.css';



export default function SearchBar(props) {
   return (
      <div className={style.container}>
         <input className={style.input} type='search' name='search' placeholder='Buscar Personje' />
         <button className={style.button} onClick={props.onSearch}>Buscar</button>
      </div>

   );

}
