// Esse reducer será responsável por tratar as informações da pessoa usuária

import { USER } from '../actions';

const INITIAL_STATE = {
  user: {
    email: '',
  },
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case USER:
    return { ...state, email: action.payload };
  default:
    return state;
  }
};

export default user;

/* começamos pegando a action que vai disparar o reducer, abrimos o estado inicial vazio, quando tiver o clique,
vai executar o handleEmail que vai pro estado global e aqui é atualizado no estado pelo switch User */
