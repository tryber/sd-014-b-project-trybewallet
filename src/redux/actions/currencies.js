import getCurrencies from '../../service';

export const REQUEST_API_START = 'REQUEST_API_START ';
export const REQUEST_API_SUCCESS = 'REQUEST_API_SUCESS';

const requestApiStart = () => ({
  type: REQUEST_API_START,
  payload: { isLoading: true },
});

const requestApiSuccess = (currencies) => ({
  type: REQUEST_API_SUCCESS,
  payload: { currencies, isLoading: false },
});

export const getCurrenciesApiThunk = () => async (dispatch) => {
  dispatch(requestApiStart());
  const currencies = await getCurrencies();
  dispatch(requestApiSuccess(currencies));
};
