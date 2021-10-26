import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Expenses extends Component {
  render() {
    const { xablau } = this.props;

    return (
      <form>
        <label htmlFor="value">
          Valor
          <input type="text" name="value" id="value" />
        </label>
        <label htmlFor="description">
          Descrição
          <input type="text" name="description" id="description" />
        </label>
        <label htmlFor="currency">
          Moeda
          <select name="currency" id="currency">
            { xablau.map((xablaus, index) => <option key={ index }>{ xablaus }</option>)}
          </select>
        </label>
        <label htmlFor="payment-method">
          Método de pagamento
          <select name="payment-method" id="payment-method">
            <option value="dinheiro">Dinheiro</option>
            <option value="cartao-de-credito">Cartão de crédito</option>
            <option value="cartao-de-debito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select name="tag" id="tag">
            <option value="alimentacao">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="saude">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

Expenses.propTypes = {
  xablau: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
};

export default Expenses;
