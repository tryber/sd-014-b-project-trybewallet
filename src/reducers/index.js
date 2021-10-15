import user from './user';
import wallet from './wallet';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({ user, wallet });

export default rootReducer;
