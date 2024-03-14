export const GET_CHARACTERS = 'GET_CHARACTERS';

export const getCharacters = () => {
 
    return function(dispatch) {
        fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(data => {
            dispatch({
                type: GET_CHARACTERS,
                payload: data.results
            })
        })
    }
}