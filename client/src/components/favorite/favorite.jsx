import React from 'react';
import Card from '../card/Card';
import { connect } from 'react-redux';
import style from './favorites.module.css';
import { addFav, removeFav, filterCards, orderCards } from '../../Redux/Actions.js';
import { useDispatch } from 'react-redux';
const Favorite = ({ myFavorites }) => {

    const dispatch = useDispatch();
    const handleOrder = (e) => {
        dispatch(orderCards(e.target.value));
    };

    const handleFilter = (e) => {
        dispatch(filterCards(e.target.value));
    };
    console.log(myFavorites);
    return (
        <div className={style.favorite}>
            <div className={style.selectsContainer}>


                <div>
                    <select id="order" onChange={handleOrder} className={style.select}>
                        <option value="">Ordenar por: </option>
                        <option value="A">Ascendente</option>
                        <option value="D">Descendente</option>
                    </select>
                </div>
                <div>
                    <select id="filter" onChange={handleFilter} className={style.select}>
                        <option value="">Filtrar por: </option>
                        <option value="All">All</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="unknown">Unknown</option>
                    </select>
                </div>
            </div>
            <div className={style.cardContainer}>
                {myFavorites.map((fav) => (
                    <Card
                        key={fav.id}
                        id={fav.id}
                        name={fav.name}
                        status={fav.status}
                        episodes={fav.episode}
                        species={fav.species}
                        gender={fav.gender}
                        image={fav.image}
                        origin={fav.origin}
                    />
                ))}
            </div>
        </div>
    );
};


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

export default connect(mapStateToProps, mapDispatchToProps)(Favorite);