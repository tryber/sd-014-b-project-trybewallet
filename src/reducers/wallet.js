// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { ADD_EXPENSE,
  FAILED_REQUEST, GET_CURRENCIES, REMOVE_EXPENSE, REQUEST_CURRENCIES } from '../actions';

const initialState = {
  currencies: [],
  expenses: [],
  isFetching: false,
  error: '',
};

const wallet = (state = initialState, { type, payload }) => { // adaptado do course, bloco 15.4 (Actions Assíncronas), no conteúdo 'Exemplos guiados'; link: https://app.betrybe.com/course/front-end/gerenciamento-de-estado-com-redux/usando-o-redux-no-react-actions-assincronas/5e038872-db20-44f5-b6d5-ab36b654fff6/conteudos/4024403d-2645-41c3-9916-76f37bb7997f/exemplos-guiados/4c67f17a-9c4f-4067-a702-4b15c4c055b5?use_case=side_bar
  switch (type) {
  case REQUEST_CURRENCIES:
    return { ...state, isFetching: true };
  case GET_CURRENCIES:
    return { ...state, currencies: payload, isFetching: false };
  case FAILED_REQUEST:
    return { ...state, error: payload, isFetching: false };
  case ADD_EXPENSE:
    return { ...state, expenses: [...state.expenses, payload] }; // adaptado do PR#1 de Michael Caxias - https://github.com/tryber/sd-014-b-project-trybewallet/pull/1
  case REMOVE_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses.filter((expense) => expense.id !== payload)],
    };
  default:
    return state;
  }
};

export default wallet;
