import { combineReducers } from 'redux';
import user from './user';
import walletReducer from './wallet';

const rootReducer = combineReducers({ user, walletReducer });

export default rootReducer;
