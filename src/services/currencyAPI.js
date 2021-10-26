const API_URL = 'https://economia.awesomeapi.com.br/json/all';

const getCurrencyInfo = async () => {
  const response = await (await fetch(API_URL)).json();
  return response;
};

export default getCurrencyInfo;
