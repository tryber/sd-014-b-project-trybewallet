export function valueHelper(valor) {
  if (typeof (valor) === 'undefined') {
    return 0;
  }
  return valor;
}

export function convertNumber(curr) {
  return (Number(curr.value) * Number(curr.exangeRates[curr.currency].ask));
}
