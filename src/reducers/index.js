import { combineReducers } from 'redux';
import user from './user';
import wallet from './wallet';

const reducer = combineReducers({ user, wallet });

export default reducer;
