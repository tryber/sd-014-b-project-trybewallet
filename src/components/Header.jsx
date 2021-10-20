import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { email, expenses } = this.props;
    const total = expenses.reduce(
      (acc, { value, currency, exchangeRates }) => acc + (value
      * exchangeRates[currency].ask), 0,
    );
    return (
      <header>
        <span data-testid="email-field">
          Email:
          { email }
        </span>
        <span data-testid="total-field">
          Total R$
          { total }
        </span>
        <span data-testid="header-currency-field">BRL</span>
      </header>
    );
  }
}
const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses });

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, null)(Header);
