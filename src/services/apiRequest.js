async function returnApi() {
  const getFetch = await fetch('https://economia.awesomeapi.com.br/json/all');
  const getJson = await getFetch.json();
  const getResults = await getJson;
  return getResults;
}

export default returnApi;
