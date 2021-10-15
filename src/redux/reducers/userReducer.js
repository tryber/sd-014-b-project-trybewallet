const INICIAL_STATE = {
  user: {
    email: '',
  },
};

function userReducer(state = INICIAL_STATE, action) {
  switch (action.type) {
  case 'SET_LOGIN':
    return {
      ...state,
      email: action.payload.email,
    };
  default:
    return state;
  }
}

export default userReducer;
