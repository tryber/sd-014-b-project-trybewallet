// Coloque aqui suas actions
export const SAVE_USER_DATA = 'SAVE_USER_DATA';
const URL = 'https://economia.awesomeapi.com.br/json/all';

export const saveUserData = (email, password) => ({
  type: SAVE_USER_DATA,
  email,
  password,
});

export const guardarResultadoApi = (data) => ({
  type: 'RESULTADO_API',
  payload: data,
});

export const requestApi = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  return data;
};

export const resultApi = () => async (dispatch) => {
  const result = await requestApi();
  dispatch(guardarResultadoApi(result));
};
