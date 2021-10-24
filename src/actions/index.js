// Coloque aqui suas actions
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const GET_COINS = 'GET_COINS';

export const submitLogin = (email) => ({ type: SUBMIT_LOGIN, email });

export const getCoins = (payload) => ({ type: GET_COINS, payload });

// Ref: https://github.com/tryber/sd-014-b-project-trybewallet/pull/41/files
export const fetchCoins = () => async (dispatch) => {
  try {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    const coins = Object.keys(data)
      .filter((coin) => (coin !== 'USDT' && coin !== 'DOGE'));
    return dispatch(getCoins(coins));
  } catch (error) {
    console.log(error);
  }
};
