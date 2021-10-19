import { SET_USER_DATA } from '../actions';

/**
 * Consultei o repositorio exercise-forms-redux para
 * estudar e compreender como implementar:
 * - user
 * Ref: https://github.com/andersonleite1/exercise-forms-redux/blob/gabarito.2/src/redux/reducer/reducer.js
 */

const INITIAL_STATE = {
  email: '',
  password: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_USER_DATA:
    return {
      ...state,
      email: action.payload.email,
      password: action.payload.password,
    };
  default:
    return state;
  }
};

export default user;
