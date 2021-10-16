const INITIAL_STATE = {
  user: {
    name: '',
    email: '',
    password: '',
  },
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'SAVE_USER_INFO':
    return {
      ...state,
      user: action.user,
    };
  default:
    return state;
  }
}

export default user;
