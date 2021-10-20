export const CHANGE_WALLET = 'CHANGE_WALLET';
export const LOGGED_EMAIL = 'LOGGED_EMAIL';

export const loggedEmail = (email) => ({
  type: LOGGED_EMAIL,
  email,
});

export const changeWallet = (currencies, expenses) => ({
  type: CHANGE_WALLET,
  wallet: {
    currencies,
    expenses,
  },
});

const url = 'https://economia.awesomeapi.com.br/json/all';

export const getCoinsOfApi = () => async (dispatch) => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    delete json.USDT;
    return dispatch(changeWallet(json));
  } catch (err) {
    console.log(err.message);
  }
};
