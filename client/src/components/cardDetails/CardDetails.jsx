import React from 'react';
import style from './cardDetails.module.css';
import imagen1 from "..//..//assets/fondos/fotoGuille.png"
import { useNavigate } from 'react-router-dom';
const CardDetails = function (props) {
   const navigate = useNavigate();

   return (
      <div className={style.container}>
         <img src={imagen1} alt="" />
         <h1 className={style.info}>Sobre mí</h1>
         <h3 className={style.elementoP}>
            Me llamo Guillermo, soy un programador full stack con un enfoque principal en el front end.
            Actualmente, me encuentro en la búsqueda de mi primera experiencia profesional en el campo de la programación. Además de mis habilidades técnicas, tales como JavaScript, HTML, CSS, React, Github, Java y SQL, cuento con habilidades blandas que considero fundamentales, como el trabajo en equipo, la creatividad, la comunicación efectiva y la capacidad de aprendizaje rápido.
            Actualmente, estoy cursando un curso adicional de Full Stack en Henry para continuar fortaleciendo mis habilidades y conocimientos.
         </h3>
         <button className={style.button} onClick={() => navigate("/about")}>Volver al Home</button>
      </div>
   );
};
export default CardDetails;