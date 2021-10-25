// Coloque aqui suas actions
// const NEW_ACTION = 'NEW_ACTION';

// export default const newAction = (payload) => ({ type: NEW_ACTION, payload });

export const USER_ACTION = 'USER_ACTION';
export const WALLET_ACTION = 'WALLET_ACTION';
export const FECTH_ACTION = 'FECTH_ACTION';

export const userAction = (payload) => ({ type: USER_ACTION, payload });

export const walletAction = (promise) => ({ type: WALLET_ACTION, promise });

export const getAPI = () => ({ type: FECTH_ACTION });

export function getFetch() {
  return (dispatch) => {
    dispatch(getAPI());
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((promise) => promise.json())
      .then((json) => dispatch(walletAction(json)));
  };
}
