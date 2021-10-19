import { combineReducers } from 'redux';
import userReducer from './user';

const rootReducer = combineReducers({ userReducer });

export default rootReducer;

// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global
