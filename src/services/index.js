const url = 'https://economia.awesomeapi.com.br/json/all';

async function fetchQuotes() {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export default fetchQuotes;
