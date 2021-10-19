import React from 'react';

class ExpenseForm extends React.Component {
  render() {
    return (
      <form>
        <fieldset>
          <label htmlFor="value">
            Valor
            <input type="number" name="name" id="value" />
          </label>
          <label htmlFor="description">
            Descrição
            <input type="text" name="name" id="description" />
          </label>
          <label htmlFor="coin">
            Moeda
            <input type="text" name="name" id="coin" />
          </label>
          <select />
          <label htmlFor="payment-method">
            Método de pagamento
            <select id="payment-method">
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select id="tag">
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
        </fieldset>
      </form>
    );
  }
}

export default ExpenseForm;
