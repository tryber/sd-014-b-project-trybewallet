import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  constructor(props) {
    super(props);

    this.updateTotal = this.updateTotal.bind(this);
  }

  updateTotal() {
    const { expenses } = this.props;
    let total = 0;
    expenses.forEach(({ value, currency, exchangeRates }) => {
      total += (parseFloat(value) * parseFloat(exchangeRates[currency].ask));
    });

    return total.toFixed(2);
  }

  render() {
    const { userEmail } = this.props;

    return (
      <header>
        <span data-testid="email-field">{userEmail}</span>
        <span data-testid="total-field">{this.updateTotal()}</span>
        <span data-testid="header-currency-field">BRL</span>
      </header>
    );
  }
}

Header.propTypes = {
  userEmail: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object),
};

Header.defaultProps = {
  expenses: [],
};

const mapStateToProps = ({ user, wallet }) => ({
  userEmail: user.email,
  expenses: wallet.expenses,
});

export default connect(mapStateToProps)(Header);
