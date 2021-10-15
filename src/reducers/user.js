import { ADD_EMAIL } from '../actions/index';

const INITIAL_STATE = {
  email: 'email@teste.com',
};

const emailReducer = (state = INITIAL_STATE, action) => {
  if (action.type === ADD_EMAIL) {
    return { ...state, email: action.payload };
  } return state;
};

export default emailReducer;
