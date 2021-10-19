import React, { Component } from 'react';

class MainWallet extends Component {
  render() {
    return (
      <div>
        <label htmlFor="valor">
          Valor
          <input type="text" id="valor" />
        </label>
        <label htmlFor="descricao">
          Descrição
          <input type="text" id="descricao" />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select id="moeda">Moeda</select>
        </label>
        <label htmlFor="pagamento">
          Método de pagamento
          <select id="pagamento">
            <option key="cash" value="cash">Dinheiro</option>
            <option key="credito" value="credito">Cartão de crédito</option>
            <option key="debito" value="debito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="despesa">
          Tag
          <select id="despesa">
            <option key="alimentacao" value="alimentacao">Alimentação</option>
            <option key="lazer" value="lazer">Lazer</option>
            <option key="trabalho" value="trabalho">Trabalho</option>
            <option key="transporte" value="transporte">Transporte</option>
            <option key="saude" value="saude">Saúde</option>
          </select>
        </label>
      </div>
    );
  }
}

export default MainWallet;
