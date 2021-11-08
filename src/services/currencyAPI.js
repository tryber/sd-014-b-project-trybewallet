const URL = 'https://economia.awesomeapi.com.br/json/all';

export default async function fetchCurrencyAPI() {
  const request = await fetch(URL);
  const response = await request.json();
  return response;
}