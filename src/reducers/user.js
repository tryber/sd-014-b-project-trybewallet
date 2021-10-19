// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  email: '',
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SEND_USER_INFO:
    return SEND_USER_INFO;

  default:
    return state;
  }
};

export default userReducer;
