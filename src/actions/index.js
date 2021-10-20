import getCoins from '../services/coinsAPI';

export const SEND_COINS_EXPENSES = 'SEND_COINS_EXPENSES';
export const GET_COINS_API = 'GET_COINS_API';
export const CHANGE_USER = 'CHANGE_USER';

export const changeUser = (email) => ({
  type: CHANGE_USER,
  email,
});

export const getCoinsCurrent = (payload) => ({
  type: GET_COINS_API,
  payload,
});

export const getCoinsThunk = () => async (dispatch) => {
  const response = await getCoins();
  dispatch(getCoinsCurrent(response));
};
