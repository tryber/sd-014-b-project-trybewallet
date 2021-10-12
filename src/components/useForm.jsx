import { useState } from 'react';

const initialState = {
  userEmail: '',
  userPassword: '',
};

const useForm = () => {
  const [values, setValues] = useState(initialState);

  const handleChange = (event) => {
    const auxValues = { ...values };
    auxValues[event.target.name] = event.target.value;
    setValues(auxValues);
  };

  const handleDisabled = () => {
    // Ref: https://stackoverflow.com/questions/940577/javascript-regular-expression-email-validation
    const LENGTH_PASSWORD = 6;
    const checkEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const checkPassaword = values.userPassword.length < LENGTH_PASSWORD;

    return !checkEmail.test(values.userEmail) || checkPassaword;
  };
  return [{ values }, handleChange, handleDisabled];
};

export default useForm;
