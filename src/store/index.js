import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const store = createStore(
  rootReducer, // Junção de reducers
  composeWithDevTools(
    applyMiddleware(thunk), // Prepara pra parte assíncrona
  ),
);

export default store;