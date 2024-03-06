import React from "react";
import style from "./menu.module.css";
const Menu = () => {
    return (
        <div className={style.container}>
            <ul>
                <li>
                    <a href="/home">Home</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
            </ul>
            <button className={style.buttonSinIn} onClick={() => { window.location.href = "/" }}></button>
        </div>
    );
}

export default Menu;