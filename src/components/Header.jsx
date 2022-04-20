import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { email, totalField } = this.props;
    return (
      <header>
        <div className="container-header">
          <div>
            <h1><i className="fas fa-wallet" /> Trybe Wallet</h1>
            <span data-testid="email-field">
                { email }
            </span>
          </div>
          <div className="total">
            <h2>
              Despesa Total (
              <span data-testid="header-currency-field">
                BRL
              </span>
              )
            </h2>
            $
            <span data-testid="total-field">
              { totalField }
            </span>
          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  totalField: PropTypes.string.isRequired,
};

const calculateTotalExpense = (expenses) => {
  let total = 0;
  expenses.forEach(({ value, currency, exchangeRates }) => {
    const exchangeRate = parseFloat(exchangeRates[currency].ask);
    const convertedValue = parseFloat(value) * exchangeRate;
    total += convertedValue;
  });
  return total.toFixed(2);
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  totalField: calculateTotalExpense(state.wallet.expenses),
});

export default connect(mapStateToProps)(Header);
