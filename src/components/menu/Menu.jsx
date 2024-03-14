import React from "react";
import style from "./menu.module.css";
const Menu = () => {
    return (
        <div className={style.container}>
            <button className={style.buttonSinIn} onClick={() => { window.location.href = "/" }}></button>
            <ul>
                <li>
                    <a href="/home">Home</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/favorites">Favorites</a>
                </li>
            </ul>
        </div>
    );
}

export default Menu;