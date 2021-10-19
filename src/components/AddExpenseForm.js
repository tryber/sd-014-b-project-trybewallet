import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from './Input';
import Select from './Select';

class AddExpenseForm extends Component {
  render() {
    const { newExpense, onChange, currencies } = this.props;
    const { amount, description, currency, paymentMethod, tag } = newExpense;

    const currenciesCodes = Object.keys(currencies)
      .filter((currencyCode) => currencyCode !== 'USDT');

    return (
      <form>
        <Input
          label="Valor"
          type="number"
          id="amount"
          value={ amount }
          onChange={ onChange }
        />
        <Input
          label="Descrição"
          type="text"
          id="description"
          value={ description }
          onChange={ onChange }
        />
        <Select label="Moeda" id="currency" value={ currency } onChange={ onChange }>
          { currenciesCodes.map((currencyCode) => (
            <option key={ currencyCode }>{ currencyCode }</option>
          ))}
        </Select>
        <Select
          label="Método de pagamento"
          id="paymentMethod"
          value={ paymentMethod }
          onChange={ onChange }
        >
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </Select>
        <Select label="Tag" id="tag" value={ tag } onChange={ onChange }>
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </Select>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

AddExpenseForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  newExpense: PropTypes.shape({
    amount: PropTypes.number,
    description: PropTypes.string,
    currency: PropTypes.string,
    paymentMethod: PropTypes.string,
    tag: PropTypes.string,
  }).isRequired,
  currencies: PropTypes.objectOf(
    PropTypes.objectOf(PropTypes.string),
  ).isRequired,
};

export default connect(mapStateToProps)(AddExpenseForm);
