const URL_API = 'https://economia.awesomeapi.com.br/json/all';

const fetchCurrenciesData = async () => {
  const response = await fetch(URL_API);
  const currencies = await response.json();
  return currencies;
};

export default fetchCurrenciesData;
