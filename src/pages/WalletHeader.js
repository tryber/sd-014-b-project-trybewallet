import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './WalletHeader.css';
import { connect } from 'react-redux';

class WalletHeader extends Component {
  totalExpenses() {
    const { expenses } = this.props;
    if (expenses) {
      const sum = expenses
        .reduce((total, expense) => total
        + expense.value
        * expense.exchangeRates[expense.currency].ask, // esse ask é o valor
        0);
      return sum.toFixed(2); // arredondando pra 2 dps da vírgula
      // a exchange rate é na verdade o ask dentro do objeto
      // isso tá no read me
    }
    return 0;
  }

  render() {
    const { email } = this.props;
    return (
      <div>
        <span
          className="wallet-span"
          data-testid="email-field"
        >
          {`Email: ${email}`}
        </span>
        <span
          className="wallet-span"
          data-testid="total-field"
        >
          { `Despesa total: R$ ${this.totalExpenses()}` }
        </span>
        <span
          className="wallet-span"
          data-testid="header-currency-field"
        >
          BRL
        </span>
      </div>
    );
  }
}

WalletHeader.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(WalletHeader);
