const AWESOME_COIN_URL = 'https://economia.awesomeapi.com.br/json/all';

const apiAwesome = async () => {
  const response = await fetch(AWESOME_COIN_URL);
  const coin = await response.json();

  return coin;
};

export default apiAwesome;
