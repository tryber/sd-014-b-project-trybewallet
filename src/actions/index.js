// SAVE EMAIL
export const SAVE_EMAIL = 'SAVE_EMAIL';

export const saveEmail = (email) => ({
  type: SAVE_EMAIL,
  payload: email,
});

// SAVE CURRENCIES

export const SAVE_CURRENCIES = 'SAVE_CURRENCIES';

const endpoint = 'https://economia.awesomeapi.com.br/json/all';

export const saveCurrencies = (currencies) => ({
  type: SAVE_CURRENCIES,
  payload: currencies,
});

// SAVE EXPENSES

export const SAVE_EXPENSES = 'SAVE_EXPENSES';

export const saveExpenses = (expenses) => ({
  type: SAVE_EXPENSES,
  payload: expenses,
});

// fetchCurrencies - Salva as moedas

export const fetchCurrencies = () => async (dispatch) => {
  const resolveData = await fetch(endpoint)
    .then((resolve) => resolve.json());
  const currencies = Object.keys(resolveData);
  dispatch(saveCurrencies(currencies));
};

// fetchRates - Salva as moedas e os valores de cada uma

export const fetchRates = (expensesData) => async (dispatch) => {
  const rates = await fetch(endpoint).then((response) => response.json());
  dispatch(saveExpenses({ ...expensesData, exchangeRates: rates }));
};

// DELETAR DESPESA

export const DELETE_EXPENSES = 'DELETE_EXPENSES';

export const deleteExpenses = (expenses, index) => ({
  type: DELETE_EXPENSES,
  payload: expenses.filter((el) => el !== expenses[index]),
});

// Commit 1
