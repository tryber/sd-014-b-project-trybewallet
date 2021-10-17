const CURRENCY_URL = 'https://economia.awesomeapi.com.br/json/all';

export default async function fetchCurrencyAPI() {
  const response = await fetch(CURRENCY_URL);
  const currencyResponse = await response.json();
  return currencyResponse;
}
