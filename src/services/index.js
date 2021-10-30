// todas as requisições da minha aplicação devem ser feitas aqui.
const END_POINT = 'https://economia.awesomeapi.com.br/json/all';

export const getCurrencies = async () => {
  try {
    const response = await fetch(END_POINT);
    const currencies = await response.json();
    const arrCurrencies = Object.keys(currencies);
    return arrCurrencies;
  } catch (erro) {
    console.error(erro);
  }
};

export const getExpenses = async () => {
  try {
    const response = await fetch(END_POINT);
    const currencies = await response.json();
    return currencies;
  } catch (erro) {
    console.error(erro);
  }
};
