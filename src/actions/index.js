import fetchCoins from '../api/coins';

export const SEND_USER_INFO = 'SEND_USER_INFO';
export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';
export const SEND_WALLET_INFO = 'SEND_WALLET_INFO';

export const sendUserInfo = (payload) => ({
  type: SEND_USER_INFO,
  payload,
});

export const sendWalletInfo = (payload) => ({
  type: SEND_WALLET_INFO,
  payload,
});

export const requestCurrencies = () => ({
  type: REQUEST_CURRENCIES,
});

export function fetchCurrenciesAPI() {
  return (dispatch) => {
    dispatch(requestCurrencies());
    fetchCoins()
      .then((data) => dispatch(sendWalletInfo(data)));
  };
}
