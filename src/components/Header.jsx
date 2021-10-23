import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header>
        <span data-testid="email-field">email</span>
        <p data-testid="total-field">0</p>
        <span data-testid="header-currency-field">BRL</span>
      </header>
    );
  }
}
