import { SET_EMAIL_VALUE } from '../actions';

const initialState = {
  email: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case SET_EMAIL_VALUE:
    return { ...state, email: action.payload };
  default:
    return state;
  }
};

export default reducer;

// antes no retorno era     return { ...state, email: action.payload.email };
// se tiver .email da erro no teste
