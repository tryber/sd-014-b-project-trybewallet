const inputEmail = (value) => ({
  type: 'user/email',
  payload: value,
});

const setCurrencies = (value) => ({
  type: 'wallet/currencies',
  payload: value,
});

const addExpenses = (value) => ({
  type: 'wallet/expenses',
  payload: value,
});

module.exports = {
  inputEmail,
  setCurrencies,
  addExpenses,
};
