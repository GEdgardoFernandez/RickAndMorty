import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducer';
import thunkmiddleware from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    
    rootReducer, 
    composeEnhancers(applyMiddleware(thunkmiddleware))
    
    
    );

export default store