import { combineReducers } from 'redux';
import user from './userReducer';
import wallet from './walletReducer';

const rootReducer = combineReducers({
  user,
  wallet,
});

export default rootReducer;
