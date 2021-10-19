import { SUBMIT_EMAIL } from '../actions';

const INITIAL_STATE = {
  inputEmail: '',
};

function formReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SUBMIT_EMAIL:
    return ({ ...state, email: action.payloadEmail });

  default:
    return state;
  }
}

export default formReducer;
