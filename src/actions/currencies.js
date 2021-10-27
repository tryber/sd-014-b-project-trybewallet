import { getCurrencies } from '../services';

export const REQUEST_API_SUCCESS = 'REQUEST_API_SUCESS';

const requestApiSuccess = (currencies) => ({
  type: REQUEST_API_SUCCESS,
  payload: { currencies },
});

export const getCurrenciesApiThunk = () => async (dispatch) => {
  const allCurrencies = await getCurrencies();
  const FilteredCurrencies = allCurrencies
    .filter((currency) => (currency !== 'USDT' && currency));
  dispatch(requestApiSuccess(FilteredCurrencies));
};
