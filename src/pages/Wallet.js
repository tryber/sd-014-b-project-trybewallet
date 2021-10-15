import React from 'react';

class Wallet extends React.Component {
  render() {
    return (
      <header>
        <p data-testid="email-field"></p>
        <p data-testid="total-field"> 0</p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }
}

export default Wallet;
