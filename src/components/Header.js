import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  constructor() {
    super();

    this.totalExpensesCalculator = this.totalExpensesCalculator.bind(this);
  }

  totalExpensesCalculator() {
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
      <section>
        <header>
          <h2 data-testid="email-field">{userEmail}</h2>
          <h5 data-testid="total-field">{this.totalExpensesCalculator()}</h5>
          <h5 data-testid="header-currency-field">BRL</h5>
        </header>
      </section>
    );
  }
}
const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  expense: state.wallet.expenses,
});
export default connect(mapStateToProps, null)(Header);

Header.propTypes = {
  userEmail: PropTypes.string.isRequired,
  expense: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
