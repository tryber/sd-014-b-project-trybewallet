import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  totalExpense() {
    const { expenses } = this.props;
    return expenses.reduce((total, { currency, value, exchangeRates }) => {
      const quotation = exchangeRates[currency].ask;
      return total + (Number(quotation) * Number(value));
    }, 0);
  }

  render() {
    const { expenses, email } = this.props;
    return (
      <header>
        <Link to="/"><h4>TrybeWallet</h4></Link>
        <span data-testid="email-field">{`E-mail: ${email}`}</span>
        <span data-testid="total-field">
          {expenses.length === 0 ? 'R$ 0.00' : `R$ ${this.totalExpense().toFixed(2)}`}
        </span>
        <span data-testid="header-currency-field">BRL</span>
      </header>
    );
  }
}

Header.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Header);
