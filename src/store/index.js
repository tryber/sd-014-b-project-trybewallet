import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk)),
);
// Eu estava tendo um problema com a quantidade de enhacers no createStore e achei a solução acima no StackOverflow. Fonte: https://stackoverflow.com/questions/56215220/react-redux-error-passing-several-store-enhancers-to-createstore
export default store;
