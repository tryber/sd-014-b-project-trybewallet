import { SET_WALLET_VALUE, API_ERROR, ADD_EXPENSE_BUTTON } from '../actions/index';

const initialState = {

  currencies: [],
  expenses: [],
  exchangeRates: {},

};

const wallet = (state = initialState, action) => {
  switch (action.type) {
  case SET_WALLET_VALUE:
    return {
      ...state,
      currencies: Object.keys(action.currencies).filter((moeda) => moeda !== 'USDT'),
    };
  case API_ERROR:
    return {
      ...state,
      error: action.payload,
    };
  case ADD_EXPENSE_BUTTON:

    return {
      ...state,
      expenses: [
        ...state.expenses,
        {
          id: state.expenses.length,
          value: action.expenses.valor,
          description: action.expenses.descricao,
          currency: action.expenses.moeda,
          method: action.expenses.metodo,
          tag: action.expenses.tag,
          exchangeRates: action.expenses.exchangeRates,
        },
      ],
    };
    /* consultei o repositório do Vitor Lima para fazer o case do ADD_EXPENSE_BUTTON
    link: https://github.com/tryber/sd-014-b-project-trybewallet/pull/63/commits/0ad32230773e9e8d020b1669e2279a1f3626b617 */

  default:
    return state;
  }
};

export default wallet;
