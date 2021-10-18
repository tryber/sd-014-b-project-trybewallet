import React from 'react';

class SelectPay extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="pay">
          Método de pagamento
          <select id="pay">
            <option value="money">Dinheiro</option>
            <option value="creditCard">Cartão de Crédito</option>
            <option value="debitCard">Cartão de Débito</option>
          </select>
        </label>
      </div>
    );
  }
}

export default SelectPay;
