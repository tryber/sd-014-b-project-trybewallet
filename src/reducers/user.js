const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'SUBMIT_USER':
    return action.payload;
  default:
    return state;
  }
};

export default user;
