import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducer.js';
import { thunk } from 'redux-thunk'; // Importa 'thunk' desde redux-thunk

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
