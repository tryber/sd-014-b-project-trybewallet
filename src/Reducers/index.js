import { combineReducers } from 'redux';
import user from './user';
import wallet from './wallet';

const rootReducers = combineReducers({
  user,
  wallet,
});

export default rootReducers;
