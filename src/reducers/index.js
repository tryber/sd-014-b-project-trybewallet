import { combineReducers } from 'redux';
import user from './user';
import wallet from './wallet';
import currency from './currency';

const rootReducer = combineReducers({ user, wallet, currency });

export default rootReducer;
