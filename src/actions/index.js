// Coloque aqui suas actions
import apiAwesome from '../servises/awesomeApi';

export const SET_EMAIL = 'SET_EMAIL';
export const REQUEST_AWESOME_API = 'REQUEST_AWESOME_API';
export const RECEIVE_AWESOME_API_SUCESS = 'RECEIVE_AWESOME_API_SUCESS';
export const SET_EXPENSES = 'SET_EXPENSES';
export const COTACAO = 'COTACAO';
export const LOADING = 'LOADING';

export const setEmail = (payload) => ({
  type: SET_EMAIL,
  payload,
});

export const setExpenses = (payload) => ({
  type: SET_EXPENSES,
  payload,
});

export const resquestAwesomeApi = () => ({
  type: REQUEST_AWESOME_API,
});

export const receiveAwesomeApiSucess = (payload) => ({
  type: RECEIVE_AWESOME_API_SUCESS,
  payload,
});

export const cotacao = (payload) => ({
  type: COTACAO,
  payload,
});

export const loading = (payload) => ({
  type: LOADING,
  payload,
});

export const fetchAwesomeApi = () => (
  async (dispatch) => {
    dispatch(resquestAwesomeApi());

    const response = await apiAwesome();
    // linha 27 feita com base no codgo da Mariana https://github.com/tryber/sd-014-b-project-trybewallet/commit/a36cb3c76c73c899100e71a2d58fbc42584e3623
    dispatch(receiveAwesomeApiSucess(response));

    return response;
  }
);
