import { REQUEST_LOGIN } from '../actions';

const INNITIAL_STATE = {

  email: '',

};

const user = (state = INNITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_LOGIN:
    return { ...state, email: action.payload };
  default:
    return state;
  }
};

export default user;
