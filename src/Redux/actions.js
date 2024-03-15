export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const GET_CHARACTER_DETAILS = "GET_CHARACTER_DETAILS";
export const FILTER = "FILTER";
export const ORDER = "ORDER";
export const SET_SEARCH_TERM = "SET_SEARCH_TERM";
export const addFav = (character) => ({
  type: ADD_FAV,
  payload: character,
});

export const removeFav = (id) => ({
  type: REMOVE_FAV,
  payload: id,
});

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