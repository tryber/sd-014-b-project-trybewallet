import React from 'react';

class WalletForm extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="value-input">
          Valor:
          <input type="text" id="value-input" name="value" />
        </label>
        <label htmlFor="desc-input">
          Descrição:
          <input type="text" id="desc-input" name="desc" />
        </label>
        <label htmlFor="currency-select">
          Moeda:
          <select id="currency-select" name="coin">
          </select>
        </label>
        <label htmlFor="payment-select">
          Método de pagamento:
          <select id="payment-select" name="payment">
            <option value="money">Dinheiro</option>
            <option value="credit">Cartão de crédito</option>
            <option value="debit">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag-select">
          Tag:
          <select id="tag-select" name="tag">
            <option value="alimentation">Alimentação</option>
            <option value="leisure">Lazer</option>
            <option value="job">Trabalho</option>
            <option value="transport">Transporte</option>
            <option value="health">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

export default WalletForm;
