export const LOGIN = 'LOGIN';
export const GET_CURRENCY = 'GET_CURRENCY';
export const REQUEST_CURRENCY = 'REQUEST_CURRENCY';
export const ADD_EXPENSES = 'ADD_EXPENSES';
export const REMOVE_EXPENSES = 'REMOVE_EXPENSES';
export const EDIT_EXPENSES = 'EDIT_EXPENSES';
export const ADD_EDIT_EXPENSES = 'ADD_EDIT_EXPENSES';

export const userLogin = (payload) => ({
  type: LOGIN,
  payload,
});

export const addExpenses = (payload) => ({
  type: ADD_EXPENSES,
  payload,
});

export const removeExpenses = (payload) => ({
  type: REMOVE_EXPENSES,
  payload,
});

export const editExpenses = (payload) => ({
  type: EDIT_EXPENSES,
  payload,
});

export const addEditExpenses = (payload) => ({
  type: ADD_EDIT_EXPENSES,
  payload,
});

export const getCurrency = (data) => ({
  type: GET_CURRENCY,
  payload: data,
});

export const requestValues = () => ({
  type: REQUEST_CURRENCY,
});

export const fetchAPI = () => async (dispatch) => {
  dispatch(requestValues());
  try {
    const request = await fetch('https://economia.awesomeapi.com.br/json/all');
    const resolve = await request.json();
    return dispatch(getCurrency(resolve));
  } catch (error) {
    console.log(`Ocorreu um: ${error}`);
  }
};
