const initialState = {
    character: [],
    favorites: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CHARACTER':
            return {
                ...state,
                character: [...state.character, action.payload]
            }

        default:
            return { ...state }
    }
};

export default rootReducer;