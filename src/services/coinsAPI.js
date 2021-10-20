const COINS_BASE_API = 'https://economia.awesomeapi.com.br/json/all';

async function getCoins() {
  const getCoinsAPI = await fetch(COINS_BASE_API);
  const requestJsonCoins = await getCoinsAPI.json();
  return requestJsonCoins;
}

export default getCoins;
