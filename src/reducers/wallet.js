import { REQUEST_CURRENCIES, GET_SPENT, DEL_SPENT,
  INIT_UPDATE, UPDATE_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editExpense: {},
  isEditing: false,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_CURRENCIES:
    return {
      ...state,
      currencies: action.payload,
    };
  case GET_SPENT:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        {
          ...action.stateExpense,
          exchangeRates: action.dataApi,
        }
      ]
    };
  case DEL_SPENT:
    return {
      ...state,
      expenses: state.expenses.filter((expensive) => 
        expensive.id !== action.value),
    };
  case INIT_UPDATE:
    return {
      ...state,
      editExpense: action.payload,
      isEditing: true,
    };

    // Consultei o repositŕio do amigo Rodolfo Braga para realização do requisito 11.
    //https://github.com/tryber/sd-014-b-project-trybewallet/pull/58/commits/2e1f494cc10f6fe7810aa48c42810237330668b7

  case UPDATE_EXPENSE:
    return {
      ...state,
      isEditing: false,
      expenses: state.expenses.map((expense) => {
        if( expense.id === action.payload.id) {
          return action.payload;
        }
        return expense;
      }),
    };
  default:
    return state;
  }
};

export default wallet;
