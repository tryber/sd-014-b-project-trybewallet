import { getExpenses } from '../services';

export const ADD_DATA_EXPENSES = 'ADD_DATA_EXPENSES';

export const addDataExpenses = (expenses) => ({
  type: ADD_DATA_EXPENSES,
  payload: { expenses },
});

export const getExpensesApiThunk = (state) => async (dispatch) => {
  // fazer o fetch na api, pegar o resultado e guardar na const exchangeRates...
  const exchangeRates = await getExpenses();
  const newState = {
    // receber o estado do componente e espalhar
    ...state,
    // pegar a chave exchangesRates e colocar os os dados da api colocar nessa chave
    exchangeRates,
  };
  // fazer o dispath da action passando o novo estado completo para o reducer
  dispatch(addDataExpenses(newState));
};
