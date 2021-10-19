// Coloque aqui suas actions
import { ADD_EXPENSES } from '../reducers/wallet';
import { ADD_MAIL } from '../reducers/user';

export const mailToGlobalState = (mail) => ({
  type: ADD_MAIL,
  mail,
});

export const expensesToGlobalState = (expenses) => ({
  type: ADD_EXPENSES,
  expenses,
});
