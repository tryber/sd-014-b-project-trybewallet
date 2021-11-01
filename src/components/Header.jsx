import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function Header({ email, expenses }) {
  return (
    <>
      <p data-testid="email-field">{email}</p>
      <p data-testid="total-field">
        {expenses.reduce(
          (total, expense) => total + (Number(expense.value)
          * Number(expense.exchangeRates[expense.currency].ask)), 0,
        )}

      </p>
      <p data-testid="header-currency-field">BRL</p>
    </>
  );
}

const mapStateToProps = ({ wallet: { expenses }, user: { email } }) => ({
  email,
  expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(Object).isRequired,
};

export default connect(mapStateToProps, null)(Header);
