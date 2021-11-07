import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  render() {
    const { currencies, expenses, email } = this.props;
    return (
      <div>
        <header>
          <h2 data-testid="email-field">{email}</h2>
          <h2 data-testid="total-field">0</h2>
          <h2 data-testid="header-currency-field">{currencies}</h2>
        </header>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
  currencies: state.wallet.currencies,
  email: state.user.email,
});

Wallet.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.any).isRequired,
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Wallet);
