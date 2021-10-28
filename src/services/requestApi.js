const fetchApiCoins = async () => {
  const request = await fetch('https://economia.awesomeapi.com.br/json/all');
  const response = await request.json();
  const coins = Object.keys(response).filter((currency) => currency !== 'USDT');
  return coins;
};

export default fetchApiCoins;
