import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from './Input';
import Select from './Select';
import Btn from './Btn';

class ExpenseForm extends Component {
  render() {
    const {
      info, onChange, addExpense, currencies, isEditing, updateExpense,
    } = this.props;
    const { value, description, currency, method, tag } = info;
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
        { isEditing
          ? <Btn label="Editar despesa" onClick={ updateExpense } />
          : <Btn label="Adicionar despesa" onClick={ addExpense } />}
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  isEditing: state.wallet.isEditing,
});

ExpenseForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  info: PropTypes.shape({
    value: PropTypes.string,
    description: PropTypes.string,
    currency: PropTypes.string,
    method: PropTypes.string,
    tag: PropTypes.string,
  }).isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  addExpense: PropTypes.func.isRequired,
  isEditing: PropTypes.bool,
  updateExpense: PropTypes.func.isRequired,
};

ExpenseForm.defaultProps = {
  isEditing: false,
};

export default connect(mapStateToProps)(ExpenseForm);
