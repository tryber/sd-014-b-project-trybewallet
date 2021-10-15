import { combineReducers } from 'redux';
import userReducer from './userReducer';
import walletReducer from './walletReducer';

const rootReducer = combineReducers({ userReducer, walletReducer });

export default rootReducer;
