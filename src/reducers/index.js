// import user from './user';
// import wallet from './wallet';

// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global

import { combineReducers } from 'redux';
import user from './user'
import wallet from './wallet'

const rootReducers = combineReducers({
  user,
  wallet,
});

export default rootReducers;

/* {
  user: {
    email: '',
  },
  wallet: {
    currencies: [],
    expenses: []
  }
} */