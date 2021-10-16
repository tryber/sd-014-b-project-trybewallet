const inputEmail = (value) => ({
  type: 'user/email',
  payload: value,
});

module.exports = {
  inputEmail,
};
