// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { GET_CURRENCIES, FAILED_REQUEST, ADD_EXPENSE } from '../actions';

const INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
  },
  error: '',
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_CURRENCIES:
    return {
      ...state,
      wallet: {
        currencies: action.payload,
      },
    };
  case ADD_EXPENSE:
    return {
      ...state.wallet,
      expenses: [{
        id: 0,
        value: action.payload.value,
        description: action.payload.description,
        currency: action.payload.currency,
        method: action.payload.method,
        tag: action.payload.tag,
        exchangeRates: {},
      }],
    };
  case FAILED_REQUEST:
    return { ...state, error: action.payload };
  default:
    return state;
  }
};

// export const addExpenseReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//   case ADD_EXPENSE:
//     return {
//       ...state,
//       wallet: {
//         expenses: [...expenses, {
//           value: action.payload.value,
//           description: action.payload.description,
//           currency: action.payload.currencies,
//           payMethod: action.payload.payMethod,
//           tag: action.payload.tag,
//         }],
//       },
//     };
//   default:
//     return state;
//   }
// };

export default walletReducer;
