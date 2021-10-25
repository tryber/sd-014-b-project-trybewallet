const fetchAPI = async () => {
  const requestApi = await fetch('https://economia.awesomeapi.com.br/json/all');
  const response = await requestApi.json();
  const currencies = Object.keys(response);
  return currencies;
};
export default fetchAPI;
