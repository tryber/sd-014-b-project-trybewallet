// todas as requisições da minha aplicação devem ser feitas aqui.
const END_POINT = 'https://economia.awesomeapi.com.br/json/all';

const getCurrencies = async () => {
  try {
    const response = await fetch(END_POINT);
    const coins = await response.json();
    const arrCurrencies = Object.keys(coins);
    // const arrCurrencies = [];
    // Object.entries(coins).forEach((e) => {
    //   arrCurrencies.push(e);
    // });
    return arrCurrencies;
  } catch (erro) {
    console.error(erro);
  }
};

export default getCurrencies;
