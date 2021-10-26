import { SET_LOGIN } from '../actions';

const INICIAL_STATE = {
  email: '',
  total: 0,
};

const user = (state = INICIAL_STATE, action) => {
  switch (action.type) {
  case SET_LOGIN:
    return {
      ...state,
      email: action.payload.email,
      total: action.payload.total,
    };
  default:
    return state;
  }
};

export default user;
