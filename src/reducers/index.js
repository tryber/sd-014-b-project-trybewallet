import { combineReducers } from 'redux';
import user from './user';
import wallet from './walletReducer';

const rootReducer = combineReducers({ user, wallet });

export default rootReducer;
