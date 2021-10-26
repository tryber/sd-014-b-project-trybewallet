const url = 'https://economia.awesomeapi.com.br/json/all';

async function fetchCurrencyAPI() {
  const API = await fetch(url);
  const response = await API.json();
  return response;
}

export default fetchCurrencyAPI;
