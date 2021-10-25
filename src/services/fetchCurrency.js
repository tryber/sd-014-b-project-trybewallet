const fetchCurrency = async () => {
  const url = 'https://economia.awesomeapi.com.br/json/all';
  const response = await fetch(url);
  const resolve = await response.json();
  return resolve;
};

export default fetchCurrency;
