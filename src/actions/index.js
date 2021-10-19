// Coloque aqui suas actions
export const SAVE_USER = 'SAVE_USER';
export const REQUEST_WALLET = 'REQUEST_WALLET';
export const GET_DATA = 'GET_DATA';
export const SAVE_EXPENSES = 'SAVE_EXPENSES';
export const CHANGE_EXPENSE = 'CHANGE_EXPENSE';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';

export const saveUser = (value) => ({ type: SAVE_USER, value });

export const changeItem = (data) => ({ type: CHANGE_EXPENSE, data });

export const getDataFromAPI = (data) => ({ type: GET_DATA, data });

export const saveExpenses = (data) => ({ type: SAVE_EXPENSES, data });

export const editExpenses = (id, edit) => ({ type: EDIT_EXPENSE, id, edit });

export const fetchAPI = () => {
  const urlAPICurrency = 'https://economia.awesomeapi.com.br/json/all';
  return (dispatch) => {
    // dispatch(requestAPI());
    fetch(urlAPICurrency)
      .then((response) => response.json())
      .then((r) => dispatch(getDataFromAPI(r)));
  };
};
