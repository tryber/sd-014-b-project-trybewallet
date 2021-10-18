// // export const REQUEST_API = 'REQUEST_API';
// export const GET_MOEDAS = 'GET_MOEDAS';

// // export const requestApi = () => ({ type: REQUEST_API });
// export const getMoedas = (payload) => ({ type: GET_MOEDAS, payload });

// export function fetchApi() {
//   return async (dispatch) => {
//     try {
//       // dispatch(requestApi());
//       const response = await fetch(' https://economia.awesomeapi.com.br/json/all.');
//       const data = await response.json();
//       dispatch(getMoedas(data));
//     } catch (error) {
//       console.error(error);
//     }
//   };
// }
