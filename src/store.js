import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './reducers/user';

export default configureStore({
  reducer: {
    login: loginReducer,
  },
});
