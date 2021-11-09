import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootRedux from './reducers';

const store = createStore(
  rootRedux,
  composeWithDevTools(
    applyMiddleware(thunk),
  ),
);

export default store;
