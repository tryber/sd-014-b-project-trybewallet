import { SEND_LOGIN_INFO } from '../actions';

const INITIAL_STATE = {
  user: {
    email: '',
    password: '',
  },
  wallet: {
    currencies: [],
    expenses: [],
  },
};

function userInformation(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SEND_LOGIN_INFO:
    return ({
      ...state,
      email: action.loginInfo.email,
      password: action.loginInfo.password,
    });
  default:
    return state;
  }
}

export default userInformation;
