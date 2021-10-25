import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../style/header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.totalExpenses = this.totalExpenses.bind(this);
  }

  totalExpenses() {
    const { expenses } = this.props;
    if (expenses.length > 0) {
      const totalValue = expenses.reduce((acc, curr) => {
        const { value, currency, exchangeRates } = curr;
        const total = Number(value) * Number(exchangeRates[currency].ask);
        acc += total;
        return acc;
      }, 0);
      return totalValue;
    }
    return 0;
  }

  render() {
    const { email } = this.props;

    return (

      <header className="container-header">
        <h2 className="header-title">
          Trybe
          <p>Wallet</p>
        </h2>
        <div data-testid="email-field">
          { email }
        </div>
        <div data-testid="total-field" className="div-total">
          { this.totalExpenses() }
          <div data-testid="header-currency-field">
            BRL
          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
