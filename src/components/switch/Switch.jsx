
import style from './switch.module.css'

const Switch = () => {

    return (
        <div className={style.contSwitch}>
            <div>
            <span className={style.switchText}>Lenguage</span>
            </div>
            <label className={style.switch}>
                <input type="checkbox" className={style.input__check}/>
                    <span className={style.slider}>EN</span>
            </label>
        </div>
    )
}

export default Switch