// função de requisição da API criada com base na aula ao vivo 15.4
import { setCurrencies, setExpense } from '../actions';

export const BASE_CURRENCIE_URL = 'https://economia.awesomeapi.com.br/json/all';

export const getDataCurrencie = () => async (dispatch) => {
  const response = await fetch(BASE_CURRENCIE_URL);
  const data = await response.json();
  delete data.USDT;
  const currencies = Object.keys(data);

  dispatch(setCurrencies(currencies));
};
export const getExpense = (expense) => async (dispatch) => {
  const response = await fetch(BASE_CURRENCIE_URL);
  const data = await response.json();
  delete data.USDT;

  dispatch(setExpense({ ...expense, exchangeRates: data }));
};
