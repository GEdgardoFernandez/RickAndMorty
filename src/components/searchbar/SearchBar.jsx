import style from './searchbar.module.css';



export default function SearchBar(props) {
   const handleInputChange = (event) => {
      props.handleFilter({
        value: event.target.value,
        key: event.target.id,
      });
    };
   return (
      <div className={style.container}>
         <input className={style.input} type='text' name='search' placeholder='Search Character' onChange={handleInputChange}/>
         <select name="status" id="statusFilter" className={style.input}  onChange={handleInputChange}>
            <option value="">Select Status</option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unknown">Unknown</option>
         </select>
      </div>
   );

}
