import { creatStore } from 'redux';
import rootReducer from '../reducers/index';

const store = creatStore(rootReducer);

export default store;
