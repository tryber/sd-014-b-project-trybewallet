import { getExpenses } from '../services';

export const ADD_DATA_EXPENSES = 'ADD_DATA_EXPENSES';
export const DELETE_EXPENSES = 'DELETE_EXPENSES';

export const addDataExpenses = (expenses) => ({
  type: ADD_DATA_EXPENSES,
  payload: { expenses },
});

export const getExpensesApiThunk = (state) => async (dispatch) => {
  const exchangeRates = await getExpenses();
  const newState = {
    ...state,
    exchangeRates,
  };
  dispatch(addDataExpenses(newState));
};

export const deleteExpenses = (id) => ({
  type: DELETE_EXPENSES,
  payload: { id },
});
