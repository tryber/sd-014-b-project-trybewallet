// Esse reducer será responsável por tratar as informações da pessoa usuária

const initialState = {};

function user(state = initialState, action) {
  switch (action.type) {
  case 'LOGIN':
    return {
      ...state,
      email: action.enter.email,
      password: action.enter.password,
    };
  default:
    return state;
  }
}

export default user;
