const API_URL = 'https://economia.awesomeapi.com.br/json/all';

export async function getCurrencies() {
  const response = await fetch(API_URL);
  const results = await response.json();

  const currencies = Object.keys(results);
  const filteredCurrencies = currencies
    .filter((currency) => currency !== 'USDT');

  return filteredCurrencies;
}

export async function getExchangeRates() {
  const response = await fetch(API_URL);
  const results = await response.json();

  return results;
}
