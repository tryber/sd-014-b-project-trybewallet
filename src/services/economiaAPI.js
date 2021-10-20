const ECONOMIA_API_URL = 'https://economia.awesomeapi.com.br/json/all';

const getCurrencies = async () => {
  const response = await fetch(ECONOMIA_API_URL);
  const currencyList = await response.json();
  return currencyList;
};

export default getCurrencies;
