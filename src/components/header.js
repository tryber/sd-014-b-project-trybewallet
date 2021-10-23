import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  totalExpenses() { // Peguei essa função com Rafael Perches
    const { expenses } = this.props;
    if (expenses) {
      const totalExpenses = expenses
        .reduce((total, expense) => total
        + expense.value
        * expense.exchangeRates[expense.currency].ask,
        0);
      return totalExpenses.toFixed(2);
    }
    return 0;
  }

  render() {
    const { userEmail } = this.props;
    return (
      <header className="header-wallet-page">
        <span data-testid="email-field">
          <h3>
            Login:
            {userEmail}
          </h3>
        </span>
        <span data-testid="total-field">
          <h3>
            Despesa Total: R$
            { this.totalExpenses() }
          </h3>
        </span>
        <span data-testid="header-currency-field">
          <h3>BRL</h3>
        </span>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  userEmail: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default connect(mapStateToProps, null)(Header);
