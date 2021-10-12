const LOGIN = 'LOGIN';

const userLogin = (payload) => ({
  type: LOGIN,
  payload,
});

export default userLogin;
