import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  constructor() {
    super();

    this.totalExpense = this.totalExpense.bind(this);
  }

  // Usei como base o PR de Fabrício Cardoso, ref: https://github.com/tryber/sd-014-b-project-trybewallet/pull/106/commits/38b0703ddbeea742823f5ddc503a4daf020d83c8
  totalExpense() {
    const { expenses } = this.props;
    return expenses.reduce((total, { currency, value, exchangeRates }) => {
      const quotation = exchangeRates[currency].ask;
      return total + (Number(quotation) * Number(value));
    }, 0);
  }

  render() {
    const { userEmail, expenses } = this.props;
    return (
      <header>
        <span data-testid="email-field">
          { userEmail }
        </span>
        <span data-testid="total-field">
          {expenses.length === 0 ? 'R$ 0.00' : `R$ ${this.totalExpense().toFixed(2)}`}
        </span>
        <span data-testid="header-currency-field">
          BRL
        </span>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
  currencies: state.wallet.currencies,
});

Header.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
  userEmail: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
