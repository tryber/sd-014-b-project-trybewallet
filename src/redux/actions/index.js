export const SET_EMAIL_VALUE = 'SET_EMAIL_VALUE';
export const GET_DATA = 'GET_DATA';
export const SAVE_EXPENSES = 'SAVE_EXPENSES';
export const getDataFromAPI = (data) => ({ type: GET_DATA, data });

export const setEmailValue = (payload) => (
  {
    type: SET_EMAIL_VALUE, payload,
  }
);

export const saveExpenses = (data) => ({ type: SAVE_EXPENSES, data });

export const fetchAPI = () => {
  const urlAPICurrency = 'https://economia.awesomeapi.com.br/json/all';
  return (dispatch) => {
    fetch(urlAPICurrency)
      .then((response) => response.json())
      .then((r) => dispatch(getDataFromAPI(r)));
  };
};
