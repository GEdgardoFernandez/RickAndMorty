import style from './navpage.module.css';
const NavPage = (props) => {
    return (
    <div className={style.containerP}>
        
        <button className={style.buttonP} onClick={() => props.setPage(props.page>=1 && props.page - props.page +1)}>Home</button>
        <p className={style.elementP}>Page: {props.page} </p>
        <button className={style.buttonP} onClick={() => props.setPage(props.page < 42  && props.page + 1)}>Next</button>
    </div>   
    )

}

export default NavPage;