/**
 * Consultei o repositorio da atividade exercise-forms-redux
 * para compreender a logica necessaria para criar uma action
 * Ref: https://github.com/andersonleite1/exercise-forms-redux/blob/gabarito.2/src/redux/action/action.js
 */

export const SET_USER_DATA = 'SET_USER_DATA';

export const setUserData = (payload) => (
  {
    type: SET_USER_DATA, payload,
  });
