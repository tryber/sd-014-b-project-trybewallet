import fetchCoin from '../services/coinsAPI';

export const FORM_LOGIN = 'FORM_LOGIN';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const REQUEST_COINS = 'REQUEST_COINS';
export const RECEIVE_COINS = 'RECEIVE_COINS';

export const formAction = (payload) => ({
  type: FORM_LOGIN,
  payload,
});

export const expenseAction = (payload) => ({
  type: ADD_EXPENSE,
  payload,
});

export const requestCoins = () => ({
  type: REQUEST_COINS,
});

export const receiveCoins = (payload) => ({
  type: RECEIVE_COINS,
  payload,
});

export const fetchCoins = () => (dispatch) => {
  dispatch(requestCoins());
  fetchCoin().then((response) => {
    dispatch(receiveCoins(response));
  });
};
