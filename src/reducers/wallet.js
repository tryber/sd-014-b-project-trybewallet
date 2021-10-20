import { SET_WALLET_VALUE, API_ERROR } from '../actions';

const initialState = {

  currencies: [],

};

const wallet = (state = initialState, action) => {
  switch (action.type) {
  case SET_WALLET_VALUE:
    return {
      ...state,
      currencies: Object.keys(action.currencies).filter((moeda) => moeda !== 'USDT'),
    };
  case API_ERROR:
    return {
      ...state,
      error: action.payload,
    };
  default:
    return state;
  }
};

export default wallet;
