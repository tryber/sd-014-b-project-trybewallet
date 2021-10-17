// Coloque aqui suas actions

export const userAction = (state) => ({
  type: 'userLogin',
  email: state.email,
});

export const walletAction = (json) => ({
  type: 'wallet',
  json,
});

export const actionFetch = () => ({
  type: 'fetch',
});

export function fetchAPI() {
  return (dispatch) => {
    dispatch(actionFetch());
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((res) => res.json())
      .then((json) => dispatch(walletAction(json)));
  };
}
