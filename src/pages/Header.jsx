import React, { Component } from 'react';

export class Header extends Component {
  render() {
    return (
      <div>
        <h1>Header</h1>
        <p data-testid="email-field">Email da pessoa logada</p>
        <p data-testid="total-field">Despesa total com o gastos VALOR INIT 0</p>
        <p data-testid="header-currency-field">Valor BRL</p>
      </div>
    );
  }
}

export default Header;
