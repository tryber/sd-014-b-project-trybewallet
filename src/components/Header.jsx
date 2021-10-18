import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header>
        <span data-testid="email-field">Email:{}</span>
        <span
          data-testid="total-field"
        >
          Despesa Total: R$ 0 <span data-testid="header-currency-field">BRL</span>
        </span>
      </header>
    );
  }
}

export default Header;