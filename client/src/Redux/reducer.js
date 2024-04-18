
import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, GET_CHARACTER_DETAILS, SET_SEARCH_TERM } from "./Actions";

const initialState = {
    myFavorites: [],
    characterDetail: {},
    allCharacters: [],
    searchTerm: ''
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_FAV:
            return { ...state, myFavorites: action.payload, allCharacters: action.payload };
        case REMOVE_FAV:
            return { ...state, myFavorites: action.payload };
        case GET_CHARACTER_DETAILS:
            return {
                ...state,
                characterDetail: action.payload
            };
        case ORDER:
            const sortedCharacters = [...state.myFavorites].sort((a, b) => {
                if (action.payload === 'A') {
                    return a.id - b.id;
                } else if (action.payload === 'D') {
                    return b.id - a.id;
                }
                return 0;
            });
            return {
                ...state,
                myFavorites: sortedCharacters
            };
        case FILTER:
            if (action.payload === 'All') {
                return {
                    ...state,
                    myFavorites: [...state.allCharacters]
                };
            } else {
                const filteredCharacters = state.allCharacters.filter(character => {
                    return character.gender.toLowerCase() === action.payload.toLowerCase();
                });
                return {
                    ...state,
                    myFavorites: filteredCharacters
                };
            }
        case SET_SEARCH_TERM:
            return {
                ...state,
                searchTerm: action.payload
            };
        default:
            return state;
    }
}

export default reducer;
