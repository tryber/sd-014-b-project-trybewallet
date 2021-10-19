import { USER } from '../actions';

const INITIAL_STATE = {
  user: {
    email: '',
    redirect: false,
  },
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case USER:
    return {
      email: action.payload,
      redirect: true,
    };

  default:
    return state;
  }
};

export default userReducer;
