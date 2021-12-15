const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'SAVE_USER_INFO':
    return { ...action.user };
  default:
    return state;
  }
}

export default user;
