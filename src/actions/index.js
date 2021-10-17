export const LOGIN_SUCESS = 'LOGIN_SUCESS';
export const SET_COINS = 'SET_COINS';
const COIN_URL = 'https://economia.awesomeapi.com.br/json/all';

export const setUserEmail = (payload) => (
  {
    type: LOGIN_SUCESS,
    payload,
  }
);

export const setCoins = (coins) => (
  {
    type: SET_COINS,
    coins,
  }
);

export const fetchCoins = () => async (dispatch) => {
  const response = await fetch(COIN_URL);
  const objectCoins = await response.json();

  // Object.keys vai retornar um array com todas as chaves contidas no objectCoins
  // o filter retorna um novo array com todos os elementos que passaram na condição
  const coins = Object.keys(objectCoins).filter((coin) => coin !== 'USDT');

  dispatch(setCoins(coins));
};
