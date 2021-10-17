const INITIAL_STATE = {
  email: '',
};

function user(state = INITIAL_STATE, { type, email }) {
  switch (type) {
  case 'LOGIN':
    return {
      ...state,
      email,
    };
  default:
    return state;
  }
}

export default user;
