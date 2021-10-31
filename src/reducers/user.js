import { user } from '../actions/index';

const INITAL_STATE = ({
  email: 'alguem@email.com',
});

export default function reduceUser(state = INITAL_STATE, action) {
  switch (action.type) {
  case user:
    return {
      ...state,
      email: action.payload,
    };
  default:
    return state;
  }
}
