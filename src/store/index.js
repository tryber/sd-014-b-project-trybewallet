import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import root from '../reducers/index';

const store = createStore(
  root,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
