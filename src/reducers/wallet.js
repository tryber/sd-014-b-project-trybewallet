import { SALVA_WALLET, SALVA_GASTOS, APAGA_GASTO } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SALVA_WALLET:
    return {
      ...state,
      currencies: action.payload,
    };

  case SALVA_GASTOS:
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

  case APAGA_GASTO:
    return {
      ...state,
      expenses: [
        ...state.expenses.filter((expense) => expense.id !== action.payload),
      ],
    };

  default:
    return state;
  }
};

export default walletReducer;
