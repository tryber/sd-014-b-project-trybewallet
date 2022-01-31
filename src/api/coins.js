const API = 'https://economia.awesomeapi.com.br/json/all';

export default async function fetchCoins() {
  const coins = await fetch(API);
  const json = await coins.json();
  return json;
}
