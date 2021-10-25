const INITIAL_STATE = {
  total: 0,

};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'ADD_EXPENSE':
    return {
      ...state,
      total: 0,
    };
  default:
    return state;
  }
}

export default wallet;
