import axios from "axios";
export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const GET_CHARACTER_DETAILS = "GET_CHARACTER_DETAILS";
export const FILTER = "FILTER";
export const ORDER = "ORDER";
export const SET_SEARCH_TERM = "SET_SEARCH_TERM";

export const addFav = (character) => {
  return async (dispatch) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    try {
      const { data } = await axios.post(endpoint, character);
      dispatch({
        type: ADD_FAV,
        payload: data
      });
    } catch (error) {
      console.error("Error adding favorite:", error);
      // Aquí podrías despachar una acción de error si lo deseas
    }
  };
};

export const removeFav = (id) => {
  return async (dispatch) => {
    const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
    try {
      const { data } = await axios.delete(endpoint);
      dispatch({
        type: REMOVE_FAV,
        payload: data
      });
    } catch (error) {
      console.error("Error removing favorite:", error);
      throw error;
    }
  }
};

export const getCharacterDetails = (id) => {
  return {
    type: GET_CHARACTER_DETAILS,
    payload: id
  };
};

export const filterCards = (gender) => {
  return {
    type: FILTER,
    payload: gender
  }
}

export const orderCards = (orden) => {
  return {
    type: ORDER,
    payload: orden
  }
}

export const setSearchTerm = (term) => ({
  type: SET_SEARCH_TERM,
  payload: term
});