import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  constructor() {
    super();
    this.totalExpenses = this.totalExpenses.bind(this);
  }

  totalExpenses(expenses) {
    const somaTotal = expenses.reduce((acc, { value, exchangeRates, currency }) => {
      acc += value * exchangeRates[currency].ask;
      return acc;
    }, 0);
    return somaTotal.toFixed(2);
  }

  render() {
    const { emailFromGlobalState, expensesFromGlobalState } = this.props;
    return (
      <header>
        <p data-testid="email-field">
          { `Email: ${emailFromGlobalState}` }
        </p>
        <section>
          Despesa total:
          <span data-testid="total-field">
            { expensesFromGlobalState.length !== 0 ? this
              .totalExpenses(expensesFromGlobalState) : '0.00' }
          </span>
          <span data-testid="header-currency-field">
            BRL
          </span>
        </section>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  emailFromGlobalState: state.user.email,
  expensesFromGlobalState: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  emailFromGlobalState: PropTypes.string.isRequired,
  expensesFromGlobalState: PropTypes.arrayOf(PropTypes.object).isRequired,
};
