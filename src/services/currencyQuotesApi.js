const API_URL = 'https://economia.awesomeapi.com.br/json/all';

const fetchCurrenciesList = async () => {
  const response = await fetch(API_URL);
  const json = await response.json();
  let currencies = Object.keys(json);
  currencies = currencies.filter((currency) => currency !== 'USDT');
  return currencies;
};
export default fetchCurrenciesList;
