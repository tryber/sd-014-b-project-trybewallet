const sumExpenses = (state) => {
  const { expenses } = state;
  return expenses.reduce((acc, { value, exchangeRates, currency }) => (
    acc + (parseFloat(value) * parseFloat(exchangeRates[currency].ask))
  ), 0);
};

export default sumExpenses;
