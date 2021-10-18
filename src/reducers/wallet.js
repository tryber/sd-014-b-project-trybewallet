// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
// Esse reducer será responsável por tratar as informações da pessoa usuária
// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global
// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  expenses: '',
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'ADD_MAIL':
    return state;
  default:
    return state;
  }
};

export default walletReducer;
