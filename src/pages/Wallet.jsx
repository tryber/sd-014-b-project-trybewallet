import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends Component {
  constructor() {
    super();

    this.state = {
      totalExpenses: 0,
    };
  }

  render() {
    const { props: { email }, state: { totalExpenses } } = this;
    return (
      <main className="wallet-page">
        <header className="header">
          <div data-testid="email-field" className="email-header">
            {`Email: ${email}`}
          </div>
          <div className="expenses">
            <div data-testid="total-field">
              {`Despesas totais: ${totalExpenses}`}
            </div>
            <span data-testid="header-currency-field"> BRL </span>
          </div>
        </header>
      </main>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  return {
    email: state.user.email,
  };
}

export default connect(mapStateToProps, null)(Wallet);
