// Coloque aqui suas actions
export const USER_EMAIL = 'USER_EMAIL';
export const BUTTON_ADD = 'BUTTON_ADD';
export const WALLET_DATA = 'WALLET_DATA';

export const emailUser = (email) => ({
  type: USER_EMAIL,
  email,
});

export const walletObj = (data) => ({
  type: WALLET_DATA,
  data,
});

export const actionBtn = (allState) => ({
  type: BUTTON_ADD,
  allState,
});

export const fetchRates = (expensesData) => async (dispatch) => {
  const rates = await fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json());
  dispatch(actionBtn({ ...expensesData, exchangeRates: rates }));
};
