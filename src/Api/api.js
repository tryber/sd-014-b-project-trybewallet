const URL = 'https://economia.awesomeapi.com.br/json/all';
export default async function requestCurrency() {
  const data = await fetch(URL);
  return data.json();
}
