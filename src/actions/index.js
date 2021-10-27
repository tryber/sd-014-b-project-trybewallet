export const SEND_LOGIN_INFO = 'SEND_LOGIN_INFO';

export const sendLoginInfo = (loginInfo) => ({
  type: SEND_LOGIN_INFO,
  loginInfo,
});
