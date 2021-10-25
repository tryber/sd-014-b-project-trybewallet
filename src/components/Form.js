import React, { Component } from 'react';
import Input from './Input';

export default class Form extends Component {
  render() {
    return (
      <div>
        <form>
          <Input
            label="Valor"
            type="text"
            name="valor"
          />
          <Input
            prop={ {
              label: 'Descrição',
              type: 'text',
              name: 'descrição',
            } }
          />
          <label htmlFor="moeda">
            Moeda
            <select id="moeda">
              <option value="">Moeda</option>
            </select>
          </label>
          <label htmlFor="pagamento">
            Método de pagamento
            <select id="pagamento">
              <option value="Dinheiro">Dinheiro</option>
              <option value="cartao-de-credito">Cartão de crédito</option>
              <option value="cartao-de-debito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select id="tag">
              <option value="Dinheiro">Alimentação</option>
              <option value="Dinheiro">Lazer</option>
              <option value="Dinheiro">Trabalho</option>
              <option value="Dinheiro">Transporte</option>
              <option value="Dinheiro">Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}
