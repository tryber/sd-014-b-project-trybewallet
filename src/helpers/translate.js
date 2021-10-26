const labelTranslate = (label) => {
  switch (label) {
  case 'value':
    return 'Valor';
  case 'description':
    return 'Descrição';
  case 'currency':
    return 'Moeda';
  case 'method':
    return 'Método de pagamento';
  case 'tag':
    return 'Tag';
  default:
    break;
  }
};

export default labelTranslate;
