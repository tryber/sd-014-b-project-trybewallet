// Coloque aqui suas actions
export const REQUEST_USER = 'REQUEST_USER';
export const REQUEST_WALLET = 'REQUEST_WALLET';
// export const GET_PICTURE_FAIL = 'GET_PICTURE_FAIL';

export const requestUser = () => ({ type: REQUEST_USER });

export const getPicture = (data) => ({ type: REQUEST_WALLET, data });

// export const getPicture_error = () => ({ type: REQUEST_WALLET_FAIL });

/* export const fetchAPI = () => {
  // Desenvolva aqui o código da action assíncrona
  const urlApiCats = 'https://aws.random.cat/meow';
  return (dispatch) => {
    dispatch(requestAPI())
    fetch(urlApiCats)
      .then((response) => response.json())
      .then((r) => dispatch(getPicture(r)))
      .catch((error) => dispatch(getPicture_error()));
  }
} */
