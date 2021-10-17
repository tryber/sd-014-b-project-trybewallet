import { SET_USER_VALUE } from '../actions';

const INICIAL_STATE = {
  email: '',
};

const reducer = (state = INICIAL_STATE, action) => {
  switch (action.type) {
  case SET_USER_VALUE:
    return { ...state, email: action.payload };
  default:
    return state;
  }
};

export default reducer;
