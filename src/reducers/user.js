// Esse reducer será responsável por tratar as informações da pessoa usuária

const initialState = {
  user: {
    email: '',
  },
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
  case typeName:
    return { ...state, ...payload };
  default:
    return state;
  }
};
