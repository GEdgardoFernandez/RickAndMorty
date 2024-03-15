import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, GET_CHARACTER_DETAILS, SET_SEARCH_TERM} from "./Actions";

const initialState = {
    myFavorites: [],
    characterDetail: {},
    allCharacters: [],
    searchTerm: ''
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_FAV:
            // Reemplaza myFavorites por allCharacters en la copia del estado global
            const updatedAllCharacters = [...state.allCharacters, action.payload];
            return {
                ...state,
                myFavorites: updatedAllCharacters,
                allCharacters: updatedAllCharacters // Agrega el nuevo personaje a allCharacters
            };
        case REMOVE_FAV:
            // Filtrar los favoritos para eliminar el personaje con la ID correspondiente
            const filteredFavorites = state.myFavorites.filter((fav) => fav.id !== Number(action.payload));
            return {
                ...state,
                myFavorites: filteredFavorites
            };
        case GET_CHARACTER_DETAILS:
            // Agregar el personaje detallado a myFavorites
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
                // Si el filtro es 'All', simplemente devuelve todos los favoritos
                return {
                    ...state,
                    myFavorites: [...state.allCharacters]
                };
            } else {
                // Filtra los personajes favoritos por género
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
