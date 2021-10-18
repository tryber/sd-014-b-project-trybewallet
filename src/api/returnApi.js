const URL_API = 'https://economia.awesomeapi.com.br/json/all';

const returnApi = async () => {
  const fetchApi = await fetch(URL_API);
  const jsonApi = await fetchApi.json();
  return jsonApi;
};

export default returnApi;
