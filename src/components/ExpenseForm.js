import React, { Component } from 'react';

class ExpenseForm extends Component {
  render() {
    return (
      <section>
        <form>
          <label htmlFor>
            Valor:
            <input type="text" name="name" />
          </label>

          <label htmlFor>
            Descrição:
            <input type="text" name="name" />
          </label>

          <label htmlFor>
            Moeda
            <select>
              <option value="laranja">Laranja</option>
            </select>
          </label>

          <label htmlFor>
            Método de pagamento
            <select>
              <option value="dinheiro">Dinheiro</option>
              <option value="credito">Cartão de crédito</option>
              <option value="debito">Cartão de débito</option>
            </select>
          </label>

          <label htmlFor>
            Tag
            <select>
              <option value="alimentacao">Alimentação</option>
              <option value="lazer">Lazer</option>
              <option value="trabalho">Trabalho</option>
              <option value="transporte">Transporte</option>
              <option value="saude">Saúde</option>
            </select>
          </label>
        </form>
      </section>
    );
  }
}

export default ExpenseForm;
