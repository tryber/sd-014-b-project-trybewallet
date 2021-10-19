import { combineReducers } from 'redux';
// import user from './user';
import loginEmailReducer from './user';
import fetchCurrenciesReducer from './wallet';
// import wallet from './wallet';

const rootReducer = combineReducers({
  loginEmailReducer, fetchCurrenciesReducer,
});

export default rootReducer;

// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global
