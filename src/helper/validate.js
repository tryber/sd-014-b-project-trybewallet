const validate = (email, password) => {
  const validateEmail = () => {
    const isValid = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email);
    if (!isValid || email === '') return false;
    return true;
  };
  const six = 6;
  if ((validateEmail()) && (password.length >= six)) {
    return true;
  }
  return false;
};

export default validate;
