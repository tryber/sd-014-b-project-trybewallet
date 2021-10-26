import { combineReducers } from 'redux';

import user from './user';
import wallet from './wallet';

const rootReducer = combineReducers({ wallet, user });

export default rootReducer;
