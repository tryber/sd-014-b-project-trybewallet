import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import getTotalExpenses from '../wallet';

class Header extends React.Component {
  render() {
    const { userEmail, expenses } = this.props;

    return (
      <header>
        <h1>TrybeWallet</h1>
        <div>
          Email:
          {' '}
          <span data-testid="email-field">{ userEmail }</span>
        </div>
        <div>
          Despesa Total:
          {' '}
          <span data-testid="total-field">{ getTotalExpenses(expenses) }</span>
          {' '}
          <span data-testid="header-currency-field">BRL</span>
        </div>
      </header>
    );
  }
}

function mapStateToProps(state) {
  return {
    userEmail: state.user.email,
    expenses: state.wallet.expenses,
  };
}

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  userEmail: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};
