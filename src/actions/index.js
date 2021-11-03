export const LOGIN = 'LOGIN';
export const USER = 'USER';

export const user = (payload) => ({
  type: LOGIN,
  payload,
});

export const userAction = (payload) => ({
  type: USER,
  payload,
});

export const setExpenses = (payload) => ({
  type: EXPENSES, payload,
});

export const setTotal = (amount) => ({
  type: TOTAL, amount,
});

export const thunkCurrencies = () => async (dispatch) => {
  try {
    dispatch(requestAPI());
    const request = await fetch('https://economia.awesomeapi.com.br/json/all');
    const response = await request.json();
    await dispatch(getCurrencies(response));
  } catch (error) {
    dispatch(failedAPI(error));
  }
};

// export const addExpense = (payload) => ({
//   type: ADD_EXPENSE,
//   payload,
// });
