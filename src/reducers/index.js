// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global
// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  user: {
    email: '',
  },
  wallet: {
    currencies: [],
    expenses: [],
  },
};

const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'ADD_MAIL':
    return { ...state,
      user: {
        email: action.mail,
      } };
  default:
    return state;
  }
};

export default rootReducer;
