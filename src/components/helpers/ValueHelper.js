function valueHelper(valor) {
  if (typeof (valor) === 'undefined') {
    return 0;
  }
  return valor;
}

function convertNumber(prev, curr) {
  return valueHelper(prev) + (Number(curr
    .value) * Number(curr.exchangeRates[curr.currency].ask));
}

export default convertNumber;
