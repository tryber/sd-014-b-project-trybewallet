const BASE_API = 'https://economia.awesomeapi.com.br/json/all';

const getAllCurrencies = async () => {
  const response = await fetch(BASE_API);
  const resolve = await response.json();
  return resolve;
};

export default getAllCurrencies;
