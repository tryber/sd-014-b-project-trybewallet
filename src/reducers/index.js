import { combineReducers } from 'redux';
import user from './user';
import walletReducer from './walletReducer';

const rootReducer = combineReducers({ user, walletReducer });

export default rootReducer;
