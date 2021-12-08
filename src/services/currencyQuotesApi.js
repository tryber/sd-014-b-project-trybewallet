const API_URL = 'https://economia.awesomeapi.com.br/json/all';

const fetchCurrenciesList = async () => {
  const response = await fetch(API_URL);
  const currencies = await response.json();
  delete currencies.USDT;
  const codes = Object.keys(currencies);
  return codes;
};

export default fetchCurrenciesList;