const API_URL = 'https://economia.awesomeapi.com.br/json/all';

export const fetchExchangeRates = async () => {
  const response = await fetch(API_URL);
  const json = await response.json();
  const keys = Object.keys(json);
  const values = Object.values(json);
  const currencies = keys.map((currency, index) => ({ [currency]: values[index] }))
    .filter((currency) => currency.code !== 'USDT');
  return currencies;
};

export const fetchCurrenciesList = async () => {
  const response = await fetch(API_URL);
  const json = await response.json();
  const currencies = Object.keys(json).filter((currency) => currency.code !== 'USDT');
  return currencies;
};
