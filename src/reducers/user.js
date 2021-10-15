// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  user: {
    email: '',
    password: '',
  },
};

export const SAVE_USER = 'SAVE_USER';

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SAVE_USER:
    return {
      user: {
        email: action.user.email,
        password: action.user.password,
      },
    };
  default:
    return state;
  }
}

export default userReducer;
