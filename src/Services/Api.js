const getAPI = async () => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const result = await response.json();
  return result;
};

export default getAPI;