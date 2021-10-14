// Requisito 4 e 5: Criando o header para componentizar a carteira
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  constructor() {
    super();

    this.calcTotalExpense = this.calcTotalExpense.bind(this);
  }

  calcTotalExpense() {
    const { expense } = this.props;

    if (expense.length !== 0) {
      const totalField = expense.reduce((total, expenses) => (
        total + expenses.value * expenses.exchangeRates[expenses.currency].ask), 0);
      return totalField.toFixed(2);
    }
    return 0;
  }

  render() {
    const { userEmail } = this.props;
    return (
      <div>
        <header>
          <h3 data-testid="email-field">{ userEmail }</h3>
          <span data-testid="total-field">{ this.calcTotalExpense() }</span>
          <span data-testid="header-currency-field">BRL</span>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  expense: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  userEmail: PropTypes.string.isRequired,
  expense: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
