// import { GET_MOEDAS } from '../actions/actionAcync';
import { ADD_FORM } from '../actions/index';

const INITIAL_STATE = {
  expenses: [{
    id: '',
    value: '',
    description: '',
    currency: 'USD',
    method: 'money',
    tag: 'meal',
  }],
};

function wallet(state = INITIAL_STATE, action) {
  if (action.type === ADD_FORM) {
    return { ...state, expenses: [action.payload] };
  } return state;
}

export default wallet;
