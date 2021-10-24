// // Esse reducer será responsável por tratar as informações da pessoa usuária
import { SAVE_INPUT_EMAIL } from '../redux/actions';

const INITAL_STATE = ({
  email: '',
});

export default function reduceUser(state = INITAL_STATE, action) {
  switch (action.type) {
  case SAVE_INPUT_EMAIL:
    return {
      ...state,
      email: action.payload,
    };
  default:
    return state;
  }
}
