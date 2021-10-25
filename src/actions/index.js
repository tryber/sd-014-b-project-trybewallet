// Coloque aqui suas actions
export const SET_EMAIL = 'user/SET_EMAIL';

export const setUserEmail = (payload) => (
  { type: SET_EMAIL, payload }
);

// form
export const SET_VALUE = 'form/SET_VALUE';
export const SET_DESCRIPTION = 'form/SET_DESCRIPTION';
export const SET_COIN = 'form/SET_COIN';
export const SET_PAYMENT = 'form/SET_PAYMENT';
export const SET_TAG = 'form/SET_TAG';

export const setFormValue = (payload) => (
  { type: SET_VALUE, payload }
);

export const setFormDesc = (payload) => (
  { type: SET_DESCRIPTION, payload }
);

export const setFormCoin = (payload) => (
  { type: SET_COIN, payload }
);

export const setFormPayment = (payload) => (
  { type: SET_PAYMENT, payload }
);

export const setFormTag = (payload) => (
  { type: SET_TAG, payload }
);

// wallet
export const CREATE_EXPENSE = 'wallet/CREATE_EXPENSE';
export const ERASE_EXPENSE = 'wallet/ERASE_EXPENSE';

export const createExpense = (payload) => (
  { type: CREATE_EXPENSE, payload }
);

export const eraseExpense = (payload) => (
  { type: ERASE_EXPENSE, payload }
);
