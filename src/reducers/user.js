import { SET_USER_EMAIL } from '../actions';

const initialState = {
  email: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
  case SET_USER_EMAIL:
    return { ...state, email: action.payload };
  default:
    return state;
  }
};

export default userReducer;
