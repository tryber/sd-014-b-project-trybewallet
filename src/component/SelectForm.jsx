import PropTypes from 'prop-types';
import React, { Component } from 'react';

class SelectForm extends Component {
  render() {
    const { currency, method, tag, handleChange, coins } = this.props;
    const coinsArray = coins.map((coin, index) => (
      <option key={ index }>{coin}</option>
    ));
    return (
      <div>
        <label htmlFor="currency">
          Moeda:
          <select
            name="currency"
            id="currency"
            value={ currency }
            onChange={ handleChange }
          >
            { coinsArray }
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento:
          <select
            name="method"
            id="method"
            value={ method }
            onChange={ handleChange }
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select
            id="tag"
            name="tag"
            value={ tag }
            onChange={ handleChange }
          >
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </div>
    );
  }
}

SelectForm.propTypes = {
  coins: PropTypes.shape({
    map: PropTypes.func,
  }).isRequired,
  currency: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  method: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
};

export default SelectForm;
