const url = 'https://economia.awesomeapi.com.br/json/all';

async function fetchCoinsApi() {
  const fetchApi = await fetch(url);
  const response = await fetchApi.json();
  return response;
}

export default fetchCoinsApi;
