import React from 'react';
import style from './card.module.css';
import { addFav, removeFav } from '../../Redux/Actions.js';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Card = function (props) {
   const [isFav, setIsFav] = useState(false);

   const navigate = useNavigate();
   useEffect(() => {
      props.myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [props.myFavorites, props.id]);

   const handleFavorite = () => {
      if (!isFav) {
         props.addFav({
            id: props.id,
            name: props.name,
            status: props.status,
            species: props.species,
            image: props.image,
            gender: props.gender,
            origin: props.origin
         });
         
      } else {
         setIsFav(!isFav);
         props.removeFav(props.id);
      }
      
   };
   console.log(props.myFavorites);
   return (
      <div className={style.container}>
         <div>
            <div>
               {
                  isFav ? (
                     <button onClick={handleFavorite} className={style.btnFav}>❤️</button>
                  ) : (
                     <button onClick={handleFavorite} className={style.btnFav}>🤍</button>
                  )
               }
            </div>
            <div className={style.info}>
               <h2>Name: </h2>
               <p className={style.elementoP}>{props.name}</p>
            </div>
            <div className={style.info}>
               <h2>Status: </h2>
               <p className={style.elementoP}>{props.status}</p>
            </div>
            <div className={style.info}>
               <h2>Gender: </h2>
               <p className={style.elementoP}>{props.gender}</p>
            </div>
            <div className={style.info}>
               <h2>Origin: </h2>
               <p className={style.elementoP}>{props.origin?.name}</p>
            </div>
         </div>
         <div>
            <img src={props.image} alt='Personaje' className={style.img} />
         </div>
      </div>
   );
}

const mapStateToProps = (state) => {

   return {
      myFavorites: state.myFavorites
   };
};
const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => dispatch(addFav(character)),

      removeFav: (id) => dispatch(removeFav(id))
   }
};
export default connect(mapStateToProps, mapDispatchToProps)(Card);