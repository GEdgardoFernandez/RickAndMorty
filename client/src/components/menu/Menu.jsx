import React from "react";
import style from "./menu.module.css";
import { useNavigate } from "react-router-dom";
const Menu = () => {
    const navigate = useNavigate();
    return (
        <div className={style.container}>
            <button className={style.buttonSinIn} onClick={() => { window.location.href = "/" }}></button>
            <ul>
                <li>
                    <a onClick={() => navigate("/home")}>Home</a>
                </li>
                <li>
                    <a onClick={() => navigate("/favorites")}>Favorites</a>
                </li>
                <li>
                    <a onClick={() => navigate("/about")}>About</a>
                </li>
            </ul>
        </div>
    );
}

export default Menu;