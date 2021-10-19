import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from './Input';
import Select from './Select';
import Button from './Button';

class AddExpenseForm extends Component {
  render() {
    const { expenseInfo, onChange, addExpense, currencies } = this.props;
    const { value, description, currency, method, tag } = expenseInfo;

    const paymentMethods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const categories = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

    return (
      <form>
        <Input
          label="Valor"
          type="number"
          id="value"
          value={ value }
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
          { currencies.map((currencyCode) => (
            <option key={ currencyCode }>{ currencyCode }</option>
          ))}
        </Select>
        <Select
          label="Método de pagamento"
          id="method"
          value={ method }
          onChange={ onChange }
        >
          { paymentMethods.map((paymentMethod) => (
            <option key={ paymentMethod }>{ paymentMethod }</option>
          ))}
        </Select>
        <Select label="Tag" id="tag" value={ tag } onChange={ onChange }>
          { categories.map((category) => (
            <option key={ category }>{ category }</option>
          ))}
        </Select>
        <Button label="Adicionar despesa" onClick={ addExpense } />
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

AddExpenseForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  expenseInfo: PropTypes.shape({
    value: PropTypes.string,
    description: PropTypes.string,
    currency: PropTypes.string,
    method: PropTypes.string,
    tag: PropTypes.string,
  }).isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  addExpense: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(AddExpenseForm);
