import React from 'react';
import store from '../store/store';

class Wallet extends React.Component {
  render() {
    return (
      <header>
        <p data-testid="email-field">{ store.getState().user.email}</p>
        <p data-testid="total-field"> 0</p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }
}

export default Wallet;
