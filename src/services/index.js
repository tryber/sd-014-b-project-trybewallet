async function fetchAPI() {
  const API_URL = 'https://economia.awesomeapi.com.br/json/all';
  const response = await fetch(API_URL);
  const currencies = await response.json();
  return currencies;
}

export default fetchAPI;
