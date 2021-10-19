import React from 'react';
import { connect } from 'react-redux';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input id="value" name="value" />
        </label>
        <label htmlFor="description">
          Descrição:
          <input id="description" name="description" />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select id="currency" name="currency">
            <option>0</option>
          </select>
        </label>
        <label htmlFor="payment">
          Método de Pagamento:
          <select id="payment" name="payment">
            <option value="money">Dinheiro</option>
            <option value="credit-card">Cartão de Crédito</option>
            <option value="debit-card">Cartão de Débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select id="tag" name="tag">
            <option value="food">Alimentação</option>
            <option value="rest">Lazer</option>
            <option value="work">Trabalho</option>
            <option value="carriage">Transporte</option>
            <option value="health">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Form);
