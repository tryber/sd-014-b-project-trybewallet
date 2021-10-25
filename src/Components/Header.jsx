import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
  totalField() {
    const { expenses } = this.props;
    if (expenses.length === 0) {
      return 0;
    }
    // usar o reduce foi dica Leomar
    const reducerExpences = expenses.reduce((acc, curr) => {
      const value = curr.value;
      const coin = curr.currency;
      const ask = curr.exchangeRates[coin].ask;
      const total = value * ask;
      acc += total;
      return acc;
    }, 0);
    return reducerExpences;
  }

  render() {
    const { email } = this.props;
    return (
      <header>
        <div data-testid="email-field">{ email }</div>
        <div data-testid="total-field">{ this.totalField() }</div>
        <div data-testid="header-currency-field">BRL</div>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
