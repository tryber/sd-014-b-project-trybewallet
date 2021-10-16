import React from 'react';
import { connect } from 'react-redux';
import SelectCurrency from './SelectCurrency';
import './Expenses.css';

class Expenses extends React.Component {
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
        <SelectCurrency id="select-currency-expenses" />
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
        <button type="button">Adicionar despesa</button>
      </form>
    );
  }
}

/* Expenses.propTypes = {
  moedas: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  moedas: state.wallet.currencies,
}); */

export default connect(null)(Expenses);
