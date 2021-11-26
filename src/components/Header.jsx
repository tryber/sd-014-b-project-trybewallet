import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {

  getTotalExpensives() {
    const { expensives } = this.props;
    if (expensives.length !== 0) {
      const total = expensives.reduce((acc, currentValue) => (
        acc + currentValue.value * currentValue.exchangeRates[currentValue.currency].ask
      ), 0);
      return total.toFixed(2);
    }
    return 0;
  }

  render() {
    const { getEmail } = this.props;
    return (
      <header>
        <p data-testid="email-field">{ getEmail }</p>
        <p data-testid="total-field">{ this.getTotalExpensives() }</p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }
}

Header.propTypes = {
  getEmail: PropTypes.string.isRequired,
  expensives: PropTypes.arrayOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state) => ({
  getEmail: state.user.email,
  expensives: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);