export const LOGIN_USER_VALUE = 'LOGIN_USER_VALUE';
export const WALLET_VALUE = 'WALLET_VALUE';
export const WALLET_EXPENSES_VALUE = 'WALLET_EXPENSES_VALUE';
export const FAILURE_GET_MOEDA = 'FAILURE_GET_MOEDA';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';

export const userLogin = (payload) => ({ type: 'LOGIN_USER_VALUE', payload });
export const walletValue = (payload) => ({ type: 'WALLET_VALUE', payload });
export const walletExpensesValue = (payload) => (
  {
    type: 'WALLET_EXPENSES_VALUE',
    payload,
  });

export const failureGetMoedas = (error) => (
  {
    type: 'FAILURE_GET_MOEDA',
    error,
  }
);

export const deleteExpense = (payload) => ({
  type: 'DELETE_EXPENSE',
  payload,
});

export const fetchCurrency = () => async (dispatch) => {
  try {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    const objResult = Object.keys(data);
    return dispatch(walletValue(objResult));
  } catch (error) {
    dispatch(failureGetMoedas(error));
  }
};
