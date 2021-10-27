const url = 'https://economia.awesomeapi.com.br/json/all';

export const expenseAPI = async () => {
  const response = await fetch(url);
  console.log('olá2');
  const expenseResponse = await response.json();
  const obj = Object.keys(expenseResponse);
  return obj;
};

export const fullExpenseAPI = async () => {
  const response = await fetch(url);
  console.log('olá');
  const obj = await response.json();
  return obj;
};
