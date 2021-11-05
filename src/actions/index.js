export const submitForm = (state) => ({ type: 'SUBMIT', state });
export const getCurrency = (state) => ({ type: 'GET_CURRENCY', state });
export const submitExpenses = (state) => ({ type: 'SUBMIT_EXPENSES', state });

export function fetchCurrency() {
  return async (dispatch) => (
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((item) => item.json()
        .then((state) => dispatch(getCurrency(state))))
  );
}
