import { combineReducers } from 'redux';
import user from './user';
import walletReduce from './wallet';

const rootReducer = combineReducers({ user, walletReduce });

export default rootReducer;
// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global
