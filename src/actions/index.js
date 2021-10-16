export const USER_DATA = 'USER_DATA';

export const userLogin = (payload) => ({
  type: USER_DATA,
  email: payload.email,
});
