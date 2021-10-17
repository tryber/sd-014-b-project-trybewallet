import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class WalletForm extends Component {
  render() {
    const { currencies, value, handleChange } = this.props;
    return (
      <form>
        <label htmlFor="value-input">
          Valor:
          <input id="value-input" name="value" />
        </label>
        <br />
        <label htmlFor="desciption-input">
          Descrição:
          <input id="desciption-input" name="desciption" />
        </label>
        <br />
        <label htmlFor="currency-select">
          Moeda:
          <select id="currency-select" value={ value } onChange={ handleChange }>
            {currencies.map((currency, index) => (
              <option key={ index }>
                {currency}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label htmlFor="payment-method-select">
          Método de pagamento:
          <select id="payment-method-select" onChange={ handleChange } value={ value }>
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <br />
        <label htmlFor="tag-select">
          Tag
          <select id="tag-select" value={ value } onChange={ handleChange }>
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
