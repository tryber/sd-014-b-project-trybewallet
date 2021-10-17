const sumExpenses = (state) => { // função auxiliar para somar as despesas passando
  const { expenses } = state; // desestruturo o array de despesas do estado
  return expenses.reduce((acc, { value, exchangeRates, currency }) => ( // faço um reducer pegando o valor de cada iteração
    acc + (parseFloat(value) * parseFloat(exchangeRates[currency].ask)) // pego o acc + o value que inseri * exchangeRates(taxas de cambios) pegando a moeda selecionada
  ), 0);
};

export default sumExpenses;
