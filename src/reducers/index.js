import { combineReducers } from 'redux';
import user from './user';
import wallet from './wallet';
import currencyReducer from './getCurrency';

const rootReducer = combineReducers({
  user,
  wallet,
  currencyReducer,
});

export default rootReducer;
