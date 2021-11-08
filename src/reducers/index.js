import { combineReducers } from 'redux';
import user from './user';
import wallet from './wallet';
import form from './form';

const reducer = combineReducers({ user, wallet, form });

export default reducer;
