const INITAL_STATE = {
  value: '3',
  description: 'Hot Dog',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
};

const addExpeses = (state = INITAL_STATE, action) => {
  switch (action.type) {
  case 'Valor':
    return { ...state, value: action.payload };
  case 'Descrição':
    return { ...state, description: action.payload };
  case 'MOEDA':
    return { ...state, currency: action.payload };
  case 'METHOD':
    return { ...state, method: action.payload };
  case 'TAG':
    return { ...state, tag: action.payload };
  default:
    return state;
  }
};

export default addExpeses;
