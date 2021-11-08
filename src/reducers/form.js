// Esse reducer será responsável por tratar as informações do form
import {
  SET_VALUE,
  SET_DESCRIPTION,
  SET_COIN,
  SET_PAYMENT,
  SET_TAG,
} from '../actions';

const initialState = {
  value: '',
  description: '',
  coin: 'USD',
  payment: 'Dinheiro',
  tag: 'Alimentação',
};

const form = (state = initialState, action) => {
  switch (action.type) {
  case SET_VALUE:
    return { ...state, value: action.payload };
  case SET_DESCRIPTION:
    return { ...state, description: action.payload };
  case SET_COIN:
    return { ...state, coin: action.payload };
  case SET_PAYMENT:
    return { ...state, payment: action.payload };
  case SET_TAG:
    return { ...state, tag: action.payload };
  default:
    return state;
  }
};

export default form;
