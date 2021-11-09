import { SALVA_USUARIO } from '../actions';

const INITIAL_STATE = {
  email: '',
};

const usuarioReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SALVA_USUARIO:
    return {
      ...state,
      email: action.payload,
    };
  default:
    return state;
  }
};

export default usuarioReducer;
