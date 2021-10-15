// Esse reducer será responsável por tratar as informações da pessoa usuária

import { SAVE_EMAIL } from '../actions';

const initialState = {
  email: '',
};

const user = (state = initialState, { type, email }) => {
  switch (type) {
  case SAVE_EMAIL:
    return { ...state, email };
  default:
    return state;
  }
};

export default user;
