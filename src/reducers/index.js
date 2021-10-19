import { combineReducers } from 'redux';
import reducerLogin from './user';
import reducerWallet from './wallet';

const rootReducer = combineReducers(
  {
    user: reducerLogin,
    wallet: reducerWallet,
  },
);

export default rootReducer;
