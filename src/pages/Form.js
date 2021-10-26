import React from 'react';
// Formulario baseado em https://pt-br.reactjs.org/docs/forms.html
const currencyOptions = [
  { brl: 'BRL' },
];

const paymentMethodOptions = [
  { money: 'Dinheiro' },
  { credit: 'Cartão de crédito' },
  { debit: 'Cartão de débito' },
];

const categoryOptions = [
  { meals: 'Alimentação' },
  { leisure: 'Lazer' },
  { work: 'Trabalho' },
  { transportation: 'Transporte' },
  { health: 'Saúde' },
];

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expenditure: 0,
      description: '',
      currency: '',
      method: '',
      category: '',
    };

    this.changeStateAndElementValue = this.changeStateAndElementValue.bind(this);
    this.createOptions = this.createOptions.bind(this);
  }

  changeStateAndElementValue({ target: { value } }, key) {
    this.setState({ [key]: value });
  }

  createOptions(id, label, source) {
    const { state, changeStateAndElementValue } = this;
    return (
      <label htmlFor={ id }>
        { label }
        <select
          id={ id }
          value={ state[id] }
          onChange={ (event) => changeStateAndElementValue(event, id) }
        >
          { source.map((option) => (
            <option
              key={ Object.keys(option)[0] }
              value={ Object.keys(option)[0] }
            >
              { Object.values(option)[0] }
            </option>))}
        </select>
      </label>
    );
  }

  render() {
    const { createOptions, changeStateAndElementValue, state } = this;
    const arrayKey = Object.keys(state);
    const arrayValue = Object.values(state);

    return (
      <form>
        <label htmlFor={ arrayKey[0] }>
          Valor
          <input
            type="number"
            id={ arrayKey[0] }
            value={ arrayValue[0] }
            onChange={ (event) => changeStateAndElementValue(event, arrayKey[0]) }
          />
        </label>
        <label htmlFor={ arrayKey[1] }>
          Descrição
          <textarea
            id={ arrayKey[1] }
            value={ arrayValue[1] }
            onChange={ (event) => changeStateAndElementValue(event, arrayKey[1]) }
          />
        </label>
        { createOptions(arrayKey[2], 'Moeda', currencyOptions) }
        { createOptions(arrayKey[3], 'Método de pagamento', paymentMethodOptions) }
        { createOptions(arrayKey[4], 'Tag', categoryOptions) }
      </form>
    );
  }
}

export default Form;
