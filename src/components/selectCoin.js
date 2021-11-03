import PropTypes from 'prop-types';
import React, { Component } from 'react';

class SelectCoin extends Component {
  render() {
    const { moeda, handleChange } = this.props;
    return (
      <form>
        <label htmlFor="currency">
          Moeda:
          <select name="currency" id="currency" onChange={ handleChange }>
            { moeda.map((coin, index) => (
              <option
                key={ index }
                value={ coin }
                selected
              >
                {coin }

              </option>))}
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento:
          <select id="method" onChange={ handleChange }>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select name="tag" id="tag" onChange={ handleChange }>
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

SelectCoin.propTypes = {
  handleChange: PropTypes.func,
  moeda: PropTypes.shape({
    map: PropTypes.func,
  }),
}.isRequired;

export default SelectCoin;
