const fetchCoin = async () => {
  const API = 'https://economia.awesomeapi.com.br/json/all';
  const response = await fetch(API);
  const coins = await response.json();
  return coins;
};

export default fetchCoin;
