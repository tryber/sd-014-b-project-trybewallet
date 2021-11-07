import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="valor">
          Valor:
          <input type="text" id="valor" />
        </label>

        <label htmlFor="description">
          Descrição:
          <input
            type="text"
            id="description"
          />
        </label>

        <label htmlFor="currency">
          Moeda:
          <select id="currency" />
        </label>

        <label htmlFor="payment">
          Método de pagamento:
          <select id="payment">
            <option value="money">Dinheiro</option>
            <option value="credit">Cartão de crédito</option>
            <option value="debit">Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="tag">
          tag:
          <select id="tag">
            <option value="food">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="job">Trabalho</option>
            <option value="transport">Transporte</option>
            <option value="health">Saúde</option>
          </select>

        </label>

      </form>

    );
  }
}

export default Form;
