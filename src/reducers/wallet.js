// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { EXPENSES_OBJ_GLOBAL } from '../actions';

const INITAL_STATE = ({
  expenses: [],
});

export default function reduceUser(state = INITAL_STATE, action) {
  switch (action.type) {
  case EXPENSES_OBJ_GLOBAL:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        action.payload,
      ],
    };
  default:
    return state;
  }
}
