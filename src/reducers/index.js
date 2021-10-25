import { combineReducers } from 'redux';
import user from './user';
import currenciesReducer from './currenciesReducer';
import wallet from './wallet';

const rootReducer = combineReducers({
  user,
  wallet,
  currenciesReducer,
});

export default rootReducer;
