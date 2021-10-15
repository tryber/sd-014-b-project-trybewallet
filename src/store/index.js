import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const STORE = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default STORE;
