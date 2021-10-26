// import user from './user';
// import wallet from './wallet';

// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global

import { combineReducers } from 'redux';
import user from './emailReducer';
import wallet from './wallet';
import totalValueR from './totalValueReducer';
import coin from './coinReducer';

const rootReducer = combineReducers({ user, wallet, totalValueR, coin });
export default rootReducer;
