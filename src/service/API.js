const endPoint = 'https://economia.awesomeapi.com.br/json/all';

const fetchEndPoint = async () => {
  const result = await fetch(endPoint);
  return result.json();
};

export default fetchEndPoint;
