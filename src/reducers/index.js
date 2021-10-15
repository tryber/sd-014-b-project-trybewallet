import { combineReducers } from 'redux';
import userReducer from './user';
import walletReducer from './wallet';

const rootReducers = combineReducers({
  userReducer,
  walletReducer,
});

export default rootReducers;
