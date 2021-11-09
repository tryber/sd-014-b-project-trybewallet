import { combineReducers } from 'redux';
import user from './user';
import wallet from './wallet';
import addExpeses from './addExpeses';

const rootRedux = combineReducers({ user, wallet, addExpeses });

export default rootRedux;
