const initialState = {
  user: {
    email: '',
  },
  wallet: {
    currencies: [],
    expenses: [],
  },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
  default:
    return state;
  }
};

export default userReducer;
