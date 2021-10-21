const fetchCurriences = async () => {
  const requestApi = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await requestApi.json();
  return data;
};

export default fetchCurriences;
