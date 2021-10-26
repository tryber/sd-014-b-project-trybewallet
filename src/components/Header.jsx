import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email, expenses } = this.props;
    const totalExpense = expenses.reduce((acc, { value, currency, exchangeRates }) => {
      const currentTotal = acc + Number(value) * Number(exchangeRates[currency].ask);
      return currentTotal;
    }, 0);
    return (
      <header>
        <p data-testid="email-field">{ email }</p>
        <span data-testid="total-field">
          {` Despesa total: R$ ${totalExpense.toFixed(2)} `}
        </span>
        <span data-testid="header-currency-field">BRL</span>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object),
};

Header.defaultProps = {
  expenses: [],
};

export default connect(mapStateToProps)(Header);
