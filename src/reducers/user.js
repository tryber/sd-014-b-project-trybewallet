import { ADD_USER_EMAIL } from '../actions/index';

const INITIAL_STATE = {
  email: '',
};

export default function reducerUser(state = INITIAL_STATE, action) {
  switch (action.type) {
  case ADD_USER_EMAIL:
    return {
      ...state,
      email: action.payload,
    };
  default:
    return state;
  }
}
