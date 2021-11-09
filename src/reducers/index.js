import { combineReducers } from 'redux';
import user from './user';
import wallet from './wallet';
import edit from './edit';

const rootReducer = combineReducers({
  user,
  wallet,
  edit,
});

export default rootReducer;
