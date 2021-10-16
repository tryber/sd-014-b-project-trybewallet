// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  valorConvertido: 0,
};

const soma = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'VALOR_CONVERTIDO':
    console.log(state.valorConvertido + action.value);
    return { ...state,
      valorConvertido: action.value + state.valorConvertido };
  default:
    return state;
  }
};

export default soma;
