const ENDPOINT = 'https://economia.awesomeapi.com.br/json/all';
// Action Types.
export const USER = 'USER';
export const REQUEST_COINS = 'REQUEST_COINS';
export const RECEIVE_COINS = 'RECEIVE_COINS';
export const REQUEST_RATES = 'REQUEST_RATES';
export const RECEIVE_RATES = 'RECEIVE_RATES';

// Actions

export const user = (payload) => ({
  type: USER,
  payload,
});

const requestCoins = () => ({ type: REQUEST_COINS });
const requestRates = () => ({ type: REQUEST_RATES });

const receiveCoins = (coins) => ({
  type: RECEIVE_COINS,
  coins,
});
const receiveRates = (rates) => ({
  type: RECEIVE_RATES,
  rates,
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

export function fetchRates(expense) {
  return (dispatch) => {
    dispatch(requestRates());
    return fetch(ENDPOINT)
      .then((response) => response.json())
      .then((exchangeRates) => {
        delete exchangeRates.DOGE;
        return ({
          ...expense,
          exchangeRates,
        });
      })
      .then((exchangeRates) => dispatch(
        receiveRates(exchangeRates),
      ));
  };
}
