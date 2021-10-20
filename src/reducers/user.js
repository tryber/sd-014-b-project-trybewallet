import { USER } from '../actions';

const INITIAL_STATE = {
  user: '',
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case USER:
    return { state: action.state };
  default:
    return state;
  }
}

export default user;
