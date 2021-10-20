// Coloque aqui suas actions
import apiAwesome from '../servises/awesomeApi';

export const SET_EMAIL = 'SET_EMAIL';
export const REQUEST_AWESOME_API = 'REQUEST_AWESOME_API';
export const RECEIVE_AWESOME_API_SUCESS = 'RECEIVE_AWESOME_API_SUCESS';

export const setEmail = (payload) => ({
  type: SET_EMAIL,
  payload,
});

export const resquestAwesomeApi = () => ({
  type: REQUEST_AWESOME_API,
});

export const receiveAwesomeApiSucess = (payload) => ({
  type: RECEIVE_AWESOME_API_SUCESS,
  payload,
});

export const fetchAwesomeApi = () => (
  async (dispatch) => {
    dispatch(resquestAwesomeApi());

    const response = await apiAwesome();
    const arrayCoins = Object.keys(response).filter((moeda) => moeda !== 'USDT');
    // linha 27 feita com base no codgo da Mariana https://github.com/tryber/sd-014-b-project-trybewallet/commit/a36cb3c76c73c899100e71a2d58fbc42584e3623
    dispatch(receiveAwesomeApiSucess(arrayCoins));
  }
);
