// Coloque aqui suas actions
export const SAVE_USER = 'SAVE_USER';
export const REQUEST_WALLET = 'REQUEST_WALLET';
export const GET_DATA = 'GET_DATA';
export const SAVE_EXPENSES = 'SAVE_EXPENSES';

export const saveUser = (value) => ({ type: SAVE_USER, value });

// export const requestAPI = () => ({ type: REQUEST_WALLET });

export const getDataFromAPI = (data) => ({ type: GET_DATA, data });

export const saveExpenses = (data) => ({ type: SAVE_EXPENSES, data });

export const fetchAPI = () => {
  const urlAPICurrency = 'https://economia.awesomeapi.com.br/json/all';
  return (dispatch) => {
    // dispatch(requestAPI());
    fetch(urlAPICurrency)
      .then((response) => response.json())
      .then((r) => dispatch(getDataFromAPI(r)));
  };
};
