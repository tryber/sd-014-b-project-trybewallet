import { GET_EMAIL } from '../actions';

const INITIAL_STATE = {
  inputEmail: '',
};

function formReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_EMAIL:
    return ({
      ...state,
      email: action.payloadEmail,
    });

  default:
    return state;
  }
}

export default formReducer;
