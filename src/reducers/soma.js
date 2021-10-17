// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  valorConvertido: 0,
};

const soma = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'VALOR_CONVERTIDO':
    return { ...state,
      valorConvertido: action.value + state.valorConvertido };
  case 'REMOVE_VALOR_CONVERTIDO':
    return { ...state,
      valorConvertido: state.valorConvertido - action.value };

  default:
    return state;
  }
};

export default soma;
