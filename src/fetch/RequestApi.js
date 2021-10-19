const fetchCurriences = async () => {
  const requestApi = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await requestApi.json();
  const arrayCurrencies = Object.keys(data);
  return arrayCurrencies;
};

export default fetchCurriences;
