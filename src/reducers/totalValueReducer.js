import { SUBMIT_TOTAL } from '../actions/submitTottal';

const INITIAL_STATE = {
  totalValueR: '',
};

function totalValueR(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SUBMIT_TOTAL:
    return ({
      ...state,
      totalValueR: action.payload,
    });

  default:
    return state;
  }
}
export default totalValueR;
