const INITIAL_STATE = {
  stateEdit: {
    id: '',
    value: '0',
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
    button: 'Adicionar despesa',
  },
  valorConvertido: 0,
};

const soma = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'VALOR_CONVERTIDO':
    return { ...state,
      valorConvertido: action.value
        .map(({ exchangeRates, currency, value }) => exchangeRates[currency]
          .ask * value) };
  case 'EDIT_DESPESA':
    console.log(action.value);
    return { ...state, stateEdit: action.value };
  default:
    return state;
  }
};

export default soma;
