import style from "./display.module.css"

export default function Display({ value }) {
    return (
        <div className={style.Display}>
            <h3 >{value}</h3>
        </div>
    );
}