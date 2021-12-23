import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { emailInput, getExpensesArray } = this.props;
    const { email } = emailInput;
    const sumExpenses = getExpensesArray
      ? getExpensesArray
        .reduce((acc, { value, currency, exchangeRates }) => acc + value
        * exchangeRates[currency].ask, 0) : 0;
    return (
      <header className="container-header">
        <div className="">
          <p data-testid="email-field">
            {`Email: ${email}`}
          </p>
        </div>
        <div className="totalField">
          <p data-testid="total-field">
            {`Despesa total: R$${sumExpenses.toFixed(2)}`}
          </p>
          <p data-testid="header-currency-field" className="coin">
            BRL
          </p>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  emailInput: state.user,
  getExpensesArray: state.wallet.expenses,
});

Header.propTypes = {
  emailInput: PropTypes.objectOf(PropTypes.string).isRequired,
  getExpensesArray: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(Header);
