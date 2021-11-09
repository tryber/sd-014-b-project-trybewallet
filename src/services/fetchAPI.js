const URL = 'https://economia.awesomeapi.com.br/json/all';

async function fetchAPI() {
  const request = await fetch(URL);
  const resolve = await request.json();
  return resolve;
}

export default fetchAPI;
