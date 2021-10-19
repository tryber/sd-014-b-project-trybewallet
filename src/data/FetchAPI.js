const endPoint = 'https://economia.awesomeapi.com.br/json/all';

const lala = async () => {
  const response = await fetch(endPoint);
  const currencies = await response.json();
  return currencies;
};

export default lala;
