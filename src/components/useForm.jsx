import { useState } from 'react';

const useForm = () => {
  const [values, setValues] = useState({});

  const handleChange = (event) => {
    const auxValues = { ...values };
    auxValues[event.target.name] = event.target.value;
    setValues(auxValues);
  };
  return [{ values }, handleChange];
};

export default useForm;
