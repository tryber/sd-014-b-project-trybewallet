import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducer from '../reducers/index';

/**
 * Consultei 'Configurando o Redux DevTools'
 * no README do projeto 'project-trybewallet'
 * para implementar:
 * - store
 * Ref: https://github.com/tryber/sd-014-b-project-trybewallet
 */

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk),
  ),
);

export default store;
