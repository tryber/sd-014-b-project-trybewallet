import fetchAPI from '../services';

export const LOGIN = 'LOGIN';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const WORKING_API = 'WORKING_API';
export const FAILING_API = 'FAILING_API';

export const user = (payload) => ({
  type: LOGIN,
  payload,
});

export const addExpense = (payload) => ({
  type: ADD_EXPENSE,
  payload,
});

export const workingAPI = (payload) => (
  { type: 'WORKING_API', payload });

export const failingAPI = (error) => (
  {
    type: 'FAILING_API',
    error,
  }
);

export const getDataFromAPI = () => async (dispatch) => {
  try {
    const response = await fetchAPI();
    const payload = Object.keys(response);
    return dispatch(workingAPI(payload));
  } catch (error) {
    dispatch(failingAPI(error));
  }
};
