import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  constructor() {
    super();
    this.currencyValue = this.currencyValue.bind(this);
  }

  currencyValue() {
    const { expense } = this.props;
    return expense.reduce((acc, { currency, value, exchangeRates }) => {
      acc += value * exchangeRates[currency].ask;
      return acc;
    }, 0);
  }

  render() {
    const { email } = this.props;
    return (
      <header>
        <h1>TrybeWallet</h1>
        Email:
        <span data-testid="email-field">{ email }</span>
        Despesas Totais:
        <span>R$</span>
        <span data-testid="total-field">{ this.currencyValue() }</span>
        <span data-testid="header-currency-field">BRL</span>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expense: PropTypes.arrayOf().isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expense: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Header);
