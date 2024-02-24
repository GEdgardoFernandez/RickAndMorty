import style from './navpage.module.css';
import { useState } from 'react';
const NavPage = (props) => {
    const [count, setCount] = useState(1);
    return (
    <div className={style.containerP}>
        
        <button className={style.buttonP} onClick={() => props.setPage(props.page - 1)}>Home</button>
        <p className={style.elementP}>Page: {props.page} </p>
        <button className={style.buttonP} onClick={() => props.setPage(props.page + 1)}>Next</button>
    </div>   
    )

}

export default NavPage;