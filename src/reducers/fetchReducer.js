const INITIAL_STATE = {
  isFetching: false,
  objtApi: {},
};

const fetchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'REQUEST_API':
    return { ...state, isFetching: true };
  case 'RECEIVE_API':
    return { ...state, objtApi: action.coins, isFetching: false };
  default:
    return state;
  }
};

export default fetchReducer;
