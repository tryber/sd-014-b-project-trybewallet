// USER INFO
export const USER_EMAIL = 'USER_EMAIL';

export const saveUserEmail = (email) => ({
  type: USER_EMAIL,
  payload: email,
});
