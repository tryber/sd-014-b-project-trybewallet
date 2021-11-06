const INITIAL_STATE = {
  currency: {},
};

const currency = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'GET_CURRENCY':
    return action.state;
  default:
    return state;
  }
};

export default currency;
