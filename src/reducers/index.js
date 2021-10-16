import { combineReducers } from 'redux';

import user from './user';
import wallet from './wallet';
import soma from './soma';

const rootReducer = combineReducers({ user, wallet, soma });

export default rootReducer;
