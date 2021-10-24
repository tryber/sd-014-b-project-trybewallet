export const userMail = (email) => ({
  type: 'EMAIL',
  email,
});

const requestCurrency = () => ({
  type: 'REQUEST_CURRENCY',
});

export const receiveCurrency = (currencies) => ({
  type: 'RECEIVE_CURRENCY',
  currencies,
});

export const submitExpense = (expense) => ({
  type: 'SUBMIT_EXPENSE',
  expense,
});

export function fetchCurrency() {
  return async (dispatch) => { // thunk declarado
    dispatch(requestCurrency());
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const currency = await response.json();
    return dispatch(receiveCurrency(currency));
  };
}
