import React from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';

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
      currency: 'BRL',
      method: 'money',
      category: 'meals',
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
    const idsArray = Object.keys(state);
    const valuesArray = Object.values(state);

    return (
      <form>
        <label htmlFor={ idsArray[0] }>
          Valor
          <input
            type="number"
            id={ idsArray[0] }
            value={ valuesArray[0] }
            onChange={ (event) => changeStateAndElementValue(event, idsArray[0]) }
          />
        </label>
        <label htmlFor={ idsArray[1] }>
          Descrição
          <textarea
            id={ idsArray[1] }
            value={ valuesArray[1] }
            onChange={ (event) => changeStateAndElementValue(event, idsArray[1]) }
          />
        </label>
        { createOptions(idsArray[2], 'Moeda', currencyOptions) }
        { createOptions(idsArray[3], 'Método de pagamento', paymentMethodOptions) }
        { createOptions(idsArray[4], 'Tag', categoryOptions) }
      </form>
    );
  }
}

// const mapStateToProps = (state) => ({
//   email: state.user.email,
// });

// Form.propTypes = {
//   email: PropTypes.string,
// }.isRequired;

export default Form;
