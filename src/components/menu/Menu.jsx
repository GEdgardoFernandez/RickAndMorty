import React from "react";
import style from "./menu.module.css";
const Menu = () => {
    return (
        <div className={style.container}>
            <ul>
                <li>
                    <a href="/characters">Characters</a>
                </li>
                <li>
                    <a href="/episodes">Episodes</a>
                </li>
                <li>
                    <a href="/locations">Locations</a>
                </li>
            </ul>
        </div>
    );
}

export default Menu;