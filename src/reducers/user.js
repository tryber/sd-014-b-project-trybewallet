function userReducer(state, action) {
  switch (action.type) {
  case 'LOGIN':
    return {};
  default:
    return state;
  }
}

export default userReducer;
