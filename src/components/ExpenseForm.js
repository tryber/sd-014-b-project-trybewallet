import React from 'react';
import PropTypes from 'prop-types';
import Inputs from './Inputs';
import TagSelectOptions from './TagSelectOptions';
import CurrencySelectOptions from './CurrencySelectOptions';

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
            <CurrencySelectOptions />
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
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
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
            <TagSelectOptions />
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
