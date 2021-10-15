import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Spending extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="valor">
          Valor:
          <input id="valor" type="number" name="valor" />
        </label>
        <label htmlFor="description">
          Descrição:
          <input id="description" type="text" name="description" />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select id="currency" name="currency">
            <option>Selecione</option>
          </select>
        </label>
        <label htmlFor="payment-method">
          Método de Pagamento:
          <select id="payment-method" name="payment-method">
            <option>Selecione</option>
            <option value="money">Dinheiro</option>
            <option value="credit-card">Cartão de Crédito</option>
            <option value="debit-card">Cartão de Débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select id="tag" name="tag">
            <option>Selecione</option>
            <option value="food">Alimentação</option>
            <option value="leisure">Lazer</option>
            <option value="work">Trabalho</option>
            <option value="commute">Transporte</option>
            <option value="health">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

/* Spending.propTypes = {
  email: PropTypes.string.isRequired,
}; */

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Spending);
