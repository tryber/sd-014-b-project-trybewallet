const API_URL = 'https://economia.awesomeapi.com.br/json/all';

export const fetchCurrencies = async () => {
  const response = await fetch(API_URL);
  const json = await response.json();
  const keys = Object.keys(json);
  const values = Object.values(json);
  const currencies = keys.reduce((acc, currency, index) => {
    acc[currency] = values[index];
    return acc;
  }, {});
  return currencies;
};

export const fetchCurrenciesList = async () => {
  const response = await fetch(API_URL);
  const json = await response.json();
  const currencies = Object.keys(json).filter((currency) => currency.code !== 'USDT');
  return currencies;
};
