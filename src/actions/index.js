export const SAVE_USER = 'SAVE_USER';
export const REQUEST_USER = 'REQUEST_USER';
export const GET_API_DATA = 'GET_API_DATA';
export const SET_EXPENSES = 'SET_EXPENSES';

export const saveUser = (value) => ({ type: SAVE_USER, value });

export const requestUser = () => ({ type: REQUEST_USER });

export const saveExpenses = (data) => ({ type: SET_EXPENSES, data });

export const reqDataFromAPI = (data) => ({ type: GET_API_DATA, data });

export const fetchAPI = () => {
  const urlAPICurrency = 'https://economia.awesomeapi.com.br/json/all';
  return (dispatch) => {
    fetch(urlAPICurrency)
      .then((response) => response.json())
      .then((r) => dispatch(reqDataFromAPI(r)));
  };
};
