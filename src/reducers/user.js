import { SET_EMAIL_VALUE } from '../actions';

const initialState = {
  email: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case SET_EMAIL_VALUE:
    return { ...state, email: action.payload.email };
  default:
    return state;
  }
};

export default reducer;
