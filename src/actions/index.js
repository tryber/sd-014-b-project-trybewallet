// Coloque aqui suas actions
export const SAVE_EMAIL = 'SAVE_EMAIL';
export const GET_COINS = 'GET_COINS';

export const saveEmail = (email) => ({ type: SAVE_EMAIL, email });

export const getCoins = (payload) => ({ type: GET_COINS, payload });

export const fetchCoinsAction = () => async (dispatch) => {
  try {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    const result = Object.keys(data)
      .filter((currency) => currency !== 'USDT' && currency !== 'DOGE');
    return dispatch(getCoins(result));
  } catch (error) {
    console.log(error);
  }
};
