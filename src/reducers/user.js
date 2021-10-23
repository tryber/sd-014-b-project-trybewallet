// Esse reducer será responsável por tratar as informações da pessoa usuária
import { SUBMIT_LOGIN } from '../actions/index';

const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SUBMIT_LOGIN:
    /*
      Consultei o PR do Enzo Thomé para entender porque meu estado não estava sendo salvo
      https://github.com/tryber/sd-014-b-project-trybewallet/pull/41/files
    */
    return ({ ...state, email: action.email });

  default:
    return state;
  }
};

export default user;
