import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { user, expenses } = this.props;

    const totalExpense = expenses
      ? expenses
        .reduce((acc, { value, currency, exchangeRates }) => acc + value
          * exchangeRates[currency].ask, 0) : 0;

    return (
      <header>
        <p data-testid="email-field">
          { user }
        </p>
        <p data-testid="total-field">
          { totalExpense.toFixed(2) }
        </p>
        <p data-testid="header-currency-field">
          BRL
        </p>
      </header>
    );
  }
}

Header.propTypes = {
  user: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.Object).isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
