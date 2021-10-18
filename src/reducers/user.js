import { SAVE_EMAIL } from '../actions';

const INITIAL_STATE = {
  user: {
    email: '',
  }
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SAVE_EMAIL:
      return {
        ...state,
        user: { email: action.value },
      };
      default:
        return state;
  }
}

export default userReducer ;
