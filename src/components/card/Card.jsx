import React from 'react';
import style from './card.module.css';
const Card = function (props) {
   return (
      <div className={style.contariner}>
         <button onClick={props.onClose} className={style.button}>X</button>
         <div>
            <div className={style.info}>
               <h2>Name: </h2>
               <p className={style.elementoP}>{props.name}</p>
            </div>
            <div className={style.info}>
               <h2>Status: </h2>
               <p className={style.elementoP}>{props.status}</p>
            </div>
            <div className={style.info}>
               <h2>Specie: </h2>
               <p className={style.elementoP}>{props.species}</p>
            </div>
            <div className={style.info}>
               <h2>Gender: </h2>
               <p className={style.elementoP}>{props.gender}</p>
            </div>
            <div className={style.info}>
               <h2>Origin: </h2>
               <p className={style.elementoP}>{props.origin}</p>
            </div>
         </div>
         <div>
            <img src={props.image} alt='Personaje' className={style.img} />
         </div>
      </div>
   );
}
export default Card;