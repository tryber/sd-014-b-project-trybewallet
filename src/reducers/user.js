const INITIAL = { email: '' };
const LOGIN = 'LOGIN';

const userReducer = (state = INITIAL, action) => {
  switch (action.type) {
  case LOGIN:
    return { email: action.value };
  default:
    return state;
  }
};

export default userReducer;
