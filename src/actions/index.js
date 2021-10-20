export const LOGIN = 'LOGIN';

export const loginDone = (email) => ({
  type: LOGIN,
  email,
});
