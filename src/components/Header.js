import React from 'react';
import '../pages/WalletPage.css';

class Header extends React.Component {
  render() {
    return (
      <header className="header-wallet-page">
        <h5 className="title-wallet">TrybeWallet</h5>
        <h5 className="email-header" data-testid="email-field"> Email: </h5>
        <h5
          className="cost-total"
          data-testid="total-field"
        >
          Despesas totais: R$: 0,00
        </h5>
        <h5 className="currency" data-testid="header-currency-field">BRL</h5>
      </header>
    );
  }
}

export default Header;
