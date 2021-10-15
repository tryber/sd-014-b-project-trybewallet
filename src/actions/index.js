const inputEmail = (value) => ({
  type: 'user/email',
  payload: value,
});

const inputPassword = (value) => ({
  type: 'user/password',
  payload: value,
});

module.exports = {
  inputEmail,
  inputPassword,
};
