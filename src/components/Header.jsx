import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function Header({ user, expenses }) {
  const totalField = expenses.reduce((acc, { value, exchangeRates, currency }) => {
    const expenseValue = Number(value);
    const quotation = Number(exchangeRates[currency].ask);
    return acc + (expenseValue * quotation);
  }, 0);
  return (
    <header>
      <span data-testid="email-field">{ `E-mail: ${user}` }</span>
      <span data-testid="total-field">{ `R$ ${totalField}` }</span>
      <span data-testid="header-currency-field">BRL</span>
    </header>
  );
}

const mapStateToProps = (state) => ({
  user: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  user: PropTypes.string.isRequired,
  expenses: PropTypes.shape({
    reduce: PropTypes.func,
  }).isRequired,
};

export default connect(mapStateToProps, null)(Header);
