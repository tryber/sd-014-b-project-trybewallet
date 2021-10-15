import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

function Header({ user, expenses }) {
  const totalValue = expenses.reduce((acc, curr) => {
    const value = Number(curr.value);
    const quotation = Number(curr.exchangeRates[curr.currency].ask);
    return acc + (value * quotation);
  }, 0);

  return (
    <header>
      <span data-testid="email-field">{user}</span>
      <span data-testid="total-field">{totalValue}</span>
      <span data-testid="header-currency-field">BRL</span>
    </header>
  );
}

Header.propTypes = {
  expenses: PropTypes.shape({
    reduce: PropTypes.func,
  }).isRequired,
  user: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Header);
