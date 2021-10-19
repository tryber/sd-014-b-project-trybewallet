import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  // Créditos ao Michael e Fabrício da Turma 14-B por ajudar no desenvolvimento
  // do reduce!!
  updateTotalExpenses() {
    const { eachExpense } = this.props;

    return eachExpense.reduce((acc, currentValue) => {
      const { exchangeRates, value, currency } = currentValue;
      acc += value * exchangeRates[currency].ask;

      return acc;
    }, 0);
  }

  render() {
    const { userEmail } = this.props;

    return (
      <>
        <div data-testid="email-field">
          Email:
          { userEmail }
        </div>
        <div data-testid="total-field">
          { this.updateTotalExpenses() }
        </div>
        <span data-testid="header-currency-field">BRL</span>
      </>
    );
  }
}

Header.propTypes = {
  userEmail: PropTypes.string.isRequired,
  eachExpense: PropTypes.arrayOf(PropTypes.any).isRequired,
};

const mapStateToProps = (globalState) => ({
  userEmail: globalState.user.email,
  eachExpense: globalState.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
