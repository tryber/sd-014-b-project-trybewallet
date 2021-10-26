// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { VALID_WALLET, SAVE_EXPENSES } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case VALID_WALLET:
    return {
      ...state,
      currencies: action.payload,
    };
  // case VALID_WALLET_EXPENSES:
  //   return {
  //     ...state,
  //     currencies: action.payload,
  //   };
  case SAVE_EXPENSES:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        { id: state.expenses.length,
          value: action.payload.valor,
          description: action.payload.descricao,
          currency: action.payload.moeda,
          method: action.payload.pagamento,
          tag: action.payload.tag,
          exchangeRates: action.payload.response,
        },
      ],
    };

  default:
    return state;
  }
};

export default walletReducer;
