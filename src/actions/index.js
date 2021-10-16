export const CHECK_EMAIL = 'SEND_PERSONAL_FORM';

export const checkLogin = (email) => ({
  type: CHECK_EMAIL, email,
});
