const getCurrencies = async () => {
  const fetchCurrencies = await fetch('https://economia.awesomeapi.com.br/json/all');
  const dataCurrencies = await fetchCurrencies.json();
  return dataCurrencies;
};

export default getCurrencies;
