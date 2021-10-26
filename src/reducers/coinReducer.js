import { SUBMIT_COIN } from '../actions/submitCoin';

const INITIAL_STATE = {
  coin: '',
};

function coin(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SUBMIT_COIN:
    return ({
      ...state,
      coin: action.payload,
    });

  default:
    return state;
  }
}
export default coin;
