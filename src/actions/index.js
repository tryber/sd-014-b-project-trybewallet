export const LOGIN_INFO = 'SEND_LOGIN_INFO';

export const loginInfo = (logininfo) => ({
  type: LOGIN_INFO,
  user: {
    email: '',
  },
  wallet: {
    currencies: [],
    expenses: [],
  },
  logininfo,
});
