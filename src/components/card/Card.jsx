import React from 'react';
import style from './card.module.css';
const Card = function (props) {
   return (
      <div className={style.contariner}>
         <div>
            <div className={style.info}>
               <h2>Name: </h2>
               <p className={style.elementoP}>{props.name}</p>
            </div>
            <div className={style.info}>
               <h2>Status: </h2>
               <p className={style.elementoP}>{props.status}</p>
            </div>
         </div>
         <div>
            <img src={props.image} alt='Personaje' className={style.img} />
         </div>
         <div className={style.infoEpisodes}>
            <button className={style.button}>
               <span className={style.buttonText}>View more</span>
            </button>
         </div>
      </div>
   );
}
export default Card;