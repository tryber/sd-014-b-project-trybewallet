import { LOGIN_SUCCESSFUL } from '../actions';

const initialState = {
  email: '',
};

const user = (state = initialState, action) => {
  switch (action.type) {
  case LOGIN_SUCCESSFUL:
    return action.value;
  default:
    return state;
  }
};

export default user;
