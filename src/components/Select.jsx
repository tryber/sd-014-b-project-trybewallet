import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { currency, currencies, method, tag, handleChange } = this.props;
    return (
      <div>
        <label htmlFor="currency-select">
          Moeda:
          <select
            onChange={ handleChange }
            value={ currency }
            id="currency-select"
            name="currency"
          >
            {currencies.map((currencyType, index) => (
              <option key={ index }>
                { currencyType }
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="payment-select">
          Método de pagamento:
          <select
            onChange={ handleChange }
            value={ method }
            id="payment-select"
            name="method"
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag-select">
          Tag:
          <select
            onChange={ handleChange }
            value={ tag }
            id="tag-select"
            name="tag"
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </div>
    );
  }
}

Select.propTypes = {
  currency: PropTypes.string.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  method: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Select;
