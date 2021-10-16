import React from 'react';
import PropTypes from 'prop-types';
import Inputs from './Inputs';
import SelectOptions from './SelectOptions';

class ExpenseForm extends React.Component {
  render() {
    const { inputsValues: {
      valueInput, descriptionInput, currencyInput, paymentMethodInput, categoryInput,
    }, handleChange } = this.props;
    return (
      <form>
        <Inputs
          valueInput={ valueInput }
          descriptionInput={ descriptionInput }
          handleChange={ handleChange }
        />
        <label htmlFor="currency-input">
          Moeda
          <select
            name="currencyInput"
            onChange={ handleChange }
            value={ currencyInput }
            id="currency-input"
          >
            <option>Teste</option>
          </select>
        </label>
        <label htmlFor="payment-method-input">
          Método de pagamento
          <select
            name="paymentMethodInput"
            onChange={ handleChange }
            value={ paymentMethodInput }
            id="payment-method-input"
          >
            <option value="money">Dinheiro</option>
            <option value="credit-card">Cartão de crédito</option>
            <option value="debit-card">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="category-input">
          Tag
          <select
            name="categoryInput"
            onChange={ handleChange }
            value={ categoryInput }
            id="category-input"
          >
            <SelectOptions />
          </select>
        </label>
      </form>
    );
  }
}

ExpenseForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  inputsValues: PropTypes.shape().isRequired,
};

export default ExpenseForm;
