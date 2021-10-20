// Coloque aqui suas actions
const emailLogin = (value) => ({ type: 'LOGIN', value });
export const inputDespesa = (value) => ({ type: 'INPUT_DESPESA', value });
export const valorConvertidoDespesa = (value) => ({ type: 'VALOR_CONVERTIDO', value });
export const editDespesa = (value) => ({ type: 'EDIT_DESPESA', value });
export const saveCurrencies = (value) => ({ type: 'SAVE_CURRENCIES', value });
export const requestCurrencies = (value) => ({ type: 'REQUEST_CURRENCIES', value });

export const fetchCurrecies = () => async (dispatch) => {
  const response = await requestCurrencies();
  const payload = {
    currencies: response,
  };
  dispatch(requestCurrencies(payload));
};

export default emailLogin;
