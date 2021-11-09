const INITAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITAL_STATE, action) => {
  switch (action.type) {
  case 'CURRENCIES':
    return { ...state, currencies: action.payload };
  case 'ADD_DESPESAS':
    return { ...state, expenses: [...state.expenses, ...action.obj] };
  case 'DELET_ARRAY': {
    const duplArray = [...state.expenses].splice(0);
    const findIndexCont = duplArray.findIndex((element) => element.id === action.obj.id);
    duplArray.splice(findIndexCont, 1);
    return { ...state, expenses: [...duplArray] };
  }
  default:
    return state;
  }
};

export default wallet;
