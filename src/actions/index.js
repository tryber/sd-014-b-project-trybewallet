const ENDPOINT = 'https://economia.awesomeapi.com.br/json/all';
// Action Types.
export const USER = 'USER';
export const CURRENCIES = 'CURRENCIES';
export const EXPENSES = 'EXPENSES';
export const REQUEST_COINS = 'REQUEST_COINS';
export const RECEIVE_COINS = 'RECEIVE_COINS';

// Actions

export const user = (payload) => ({
  type: USER,
  payload,
});

export const currencies = (payload) => ({
  type: CURRENCIES,
  payload,
});

export const expenses = (payload) => ({
  type: EXPENSES,
  payload,
});

const requestCoins = () => ({ type: REQUEST_COINS });

const receiveCoins = (coins) => ({
  type: RECEIVE_COINS,
  coins,
});

export function fetchCoins() {
  return (dispatch) => {
    dispatch(requestCoins());
    return fetch(ENDPOINT)
      .then((response) => response.json())
      .then((coins) => {
        const mapCoins = Object.keys(coins);
        const USDTout = mapCoins.filter((coin) => coin !== 'USDT');
        const allGod = USDTout.filter((coin) => coin !== 'DOGE');
        return dispatch(receiveCoins(allGod));
      });
  };
}
