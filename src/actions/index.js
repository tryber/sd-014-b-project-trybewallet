export const LOGIN = 'LOGIN';
export const USER = 'USER';

export const user = (payload) => ({
  type: LOGIN,
  payload,
});

export const userAction = (payload) => ({
  type: USER,
  payload,
});
