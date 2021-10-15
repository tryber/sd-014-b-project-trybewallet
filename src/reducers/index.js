import { combineReducers } from 'redux';
import reducerLogin from './user';
import wallet from './wallet';

const rootReducer = combineReducers({ user: reducerLogin, wallet });

export default rootReducer;
