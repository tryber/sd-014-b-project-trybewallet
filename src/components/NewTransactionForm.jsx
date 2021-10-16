import React, { Component } from 'react';
import styles from '../styles/newtransactionform.module.scss';

class NewTransactionForm extends Component {
  render() {
    return (
      <form className={ styles.newTransactionForm }>
        <label htmlFor="transactionValue">
          Valor:
          <input
            type="number"
            name="transactionValue"
            id="transactionValue"
          />
        </label>
        <label htmlFor="transactionCurrency">
          Moeda:
          <select
            name="currency"
            id="transactionCurrency"
          >
            <option>Escolha sua moeda</option>
          </select>
        </label>
        <label htmlFor="paymentMethod">
          Método de pagamento:
          <select name="paymentMethod" id="paymentMethod">
            <option value="cash">Dinheiro</option>
            <option value="creditCard">Cartão de crédito</option>
            <option value="debitCard">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="transactionCategory">
          Tag:
          <select name="category" id="transactionCategory">
            <option value="food">Alimentação</option>
            <option value="recreation">Lazer</option>
            <option value="job">Trabalho</option>
            <option value="transport">Transporte</option>
            <option value="health">Saúde</option>
          </select>
        </label>
        <label htmlFor="transactionDescription">
          Descrição:
          <input
            type="text"
            name="description"
            id="transactionDescription"
          />
        </label>
      </form>
    );
  }
}

export default NewTransactionForm;
