import React, { Component } from 'react';
// import { connect } from 'react-redux';
import './css/expensesForm.css';

class ExpensesForm extends Component {
  render() {
    // const { value } = this.state;
    return (
      <form className="expensesForm">
        <label htmlFor="value">
          Valor:
          <input type="text" id="value" placeholder="Valor" />
        </label>
        <label htmlFor="resume">
          Descrição:
          <input type="text" id="resume" placeholder="Descrição da despesa" />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select id="currency">
            <option value="BRL">BRL</option>
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento:
          <select id="payment" name="payment">
            <option value="money">Dinheiro</option>
            <option value="credit">Cartão de Crédito</option>
            <option value="debit">Cartão de Débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select id="tag" name="tag">
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

// const mapDispatchToProps = (state) => ({

// });

// export default connect(null, mapDispatchToProps)(ExpensesForm);
export default ExpensesForm;
