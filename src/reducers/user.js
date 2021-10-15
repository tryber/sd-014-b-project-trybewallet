// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_USER_STATE = {
  user: {
    email: '',
  },
};

const userReducer = (state = INITIAL_USER_STATE, action) => {
  switch (action.type) {
  case 'action_type':
    return {
      ...state,
    };
  default:
    return state;
  }
};

export default userReducer;
