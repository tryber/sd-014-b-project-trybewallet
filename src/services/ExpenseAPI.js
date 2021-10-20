const url = 'https://economia.awesomeapi.com.br/json/all';

const expenseAPI = async () => {
  const response = await fetch(url);
  const expenseResponse = await response.json();
  const obj = Object.keys(expenseResponse);

  return obj;
};

export default expenseAPI;
