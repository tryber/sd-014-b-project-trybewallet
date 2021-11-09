const user = (state = { email: '' }, action) => {
  switch (action.type) {
  case 'ADD_EMAIL':
    return { email: action.email };
  default:
    return state;
  }
};

export default user;
