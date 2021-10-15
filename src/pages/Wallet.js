import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      totalExpenses: 0,
      currentCurrency: 'BRL',
    };
  }

  render() {
    const { email } = this.props;
    const { totalExpenses, currentCurrency } = this.state;
    return (
      <>
        <header>
          <h4 data-testid="email-field">{ email }</h4>
          <div>
            Despesas totais:
            <span data-testid="total-field">{ totalExpenses }</span>
          </div>
          <div>
            Câmbio atual:
            <span data-testid="header-currency-field">{ currentCurrency }</span>
          </div>
        </header>
        <main>Despesas</main>
      </>
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

export default connect(mapStateToProps)(Wallet);
