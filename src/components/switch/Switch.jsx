
import style from './switch.module.css'

const Switch = () => {

    return (
        <div className={style.contSwitch}>
            <label className={style.switch}>
                <input type="checkbox" className={style.input__check}/>
                    <span className={style.slider}></span>
            </label>
        </div>
    )
}

export default Switch