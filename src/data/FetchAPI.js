const currenciesApi = ' https://economia.awesomeapi.com.br/json/all';

export const getCurrenciesData = () => (
  fetch(currenciesApi)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);

export default getCurrenciesData;