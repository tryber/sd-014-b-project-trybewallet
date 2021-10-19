// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global

import { combineReducers } from 'redux';
import userReducer from './user';
import walletReducer from './wallet';
// Esse reducer será responsável por tratar as informações da pessoa usuária
const rootReducer = combineReducers({ user: userReducer, wallet: walletReducer });

export default rootReducer;
