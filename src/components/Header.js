import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import FormExpenses from './formExpenses';
import FormExpensesRedux from './FormExpensesRedux';

function Header({ user }) {
  return (
    <header>
      <h1 data-testid="email-field">{ user }</h1>
      <h3 data-testid="total-field">0</h3>
      <h3 data-testid="header-currency-field">BRL</h3>
      <FormExpensesRedux />
    </header>
  );
}

const mapStateToProps = (state) => ({
  user: state.user.email,
});

export default connect(mapStateToProps, null)(Header);

Header.propTypes = {
  user: PropTypes.string.isRequired,
};
