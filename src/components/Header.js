import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  totalizer() {
    const { expenses } = this.props;
    const totalSum = expenses.reduce((initVal, currVal) => {
      initVal += Number(currVal.value) * currVal.exchangeRates[currVal.currency].ask;
      return initVal;
    }, 0);
    return totalSum.toFixed(2);
  }

  render() {
    const { email } = this.props;

    return (
      <header>
        <h3 data-testid="email-field">{ email }</h3>
        <p>
          <span data-testid="total-field">{`Despesa Total ${this.totalizer()}`}</span>
          <span data-testid="header-currency-field">BRL</span>
        </p>
      </header>
    );
  }
}

const mapStateToProps = ({ user: { email }, wallet: { expenses } }) => ({
  email,
  expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
