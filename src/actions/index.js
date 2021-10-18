// Coloque aqui suas actions
export const LOGIN = 'LOGIN';
export const ADD_DISPESA = 'ADD_DISPESA';

export const login = (enter) => (
  {
    type: LOGIN, enter,
  });

export const novaDispesa = (enter) => (
  {
    type: ADD_DISPESA, enter,
  });
