const API_URL = 'https://economia.awesomeapi.com.br/json/all';

export default fetchCurrenciesList = async () => {
  const response = await fetch(API_URL);
  const json = await response.json();
  const currencies = Object.keys(json).filter((currency) => currency.code !== 'USDT');
  return currencies;
};
