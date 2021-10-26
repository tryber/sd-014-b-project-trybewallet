export const SAVE_EMAIL = 'SAVE_EMAIL';
export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const FAILED_REQUEST = 'FAILED_REQUEST';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE';

export const endpoint = 'https://economia.awesomeapi.com.br/json/all';

const LIMIT_CONTROL = 3;

export const saveEmail = (email) => ({
  type: SAVE_EMAIL,
  email,
});

function requestCurrencies() { // adaptado do course, bloco 15.4 (Actions Assíncronas), no conteúdo 'Exemplos guiados'; link: https://app.betrybe.com/course/front-end/gerenciamento-de-estado-com-redux/usando-o-redux-no-react-actions-assincronas/5e038872-db20-44f5-b6d5-ab36b654fff6/conteudos/4024403d-2645-41c3-9916-76f37bb7997f/exemplos-guiados/4c67f17a-9c4f-4067-a702-4b15c4c055b5?use_case=side_bar
  return { type: REQUEST_CURRENCIES };
}

function getCurrencies(json) {
  return {
    type: GET_CURRENCIES,
    payload: Object.keys(json).filter((currency) => currency.length === LIMIT_CONTROL),
  };
}

function failedRequest(error) { // adaptado do course, bloco 15.4 (Actions Assíncronas), no conteúdo 'Exemplos guiados'; link: https://app.betrybe.com/course/front-end/gerenciamento-de-estado-com-redux/usando-o-redux-no-react-actions-assincronas/5e038872-db20-44f5-b6d5-ab36b654fff6/conteudos/4024403d-2645-41c3-9916-76f37bb7997f/exemplos-guiados/4c67f17a-9c4f-4067-a702-4b15c4c055b5?use_case=side_bar
  return { type: FAILED_REQUEST, payload: error };
}

export const fetchCurrencies = () => async (dispatch) => { // adaptado do course, bloco 15.4 (Actions Assíncronas), no conteúdo 'Exemplos guiados'; link: https://app.betrybe.com/course/front-end/gerenciamento-de-estado-com-redux/usando-o-redux-no-react-actions-assincronas/5e038872-db20-44f5-b6d5-ab36b654fff6/conteudos/4024403d-2645-41c3-9916-76f37bb7997f/exemplos-guiados/4c67f17a-9c4f-4067-a702-4b15c4c055b5?use_case=side_bar
  try {
    dispatch(requestCurrencies());
    const fetchUrl = await fetch(endpoint);
    const jsonParsing = await fetchUrl.json();
    dispatch(getCurrencies(jsonParsing));
  } catch (error) {
    return dispatch(failedRequest(error));
  }
};

export const addExpense = (expenses) => ({
  type: ADD_EXPENSE,
  payload: expenses,
});

export const removeExpense = (id) => ({
  type: REMOVE_EXPENSE,
  payload: id,
});
