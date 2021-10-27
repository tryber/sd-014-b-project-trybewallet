import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class WalletHeader extends React.Component {
  render() {
    const { email, total } = this.props;
    console.log(total);
    return (
      <div>
        <header>
          <h4 data-testid="email-field">{email}</h4>
          <div data-testid="total-field">
            {total.reduce((acc, {
              value,
              currency,
              exchangeRates }) => acc + parseFloat(value) * exchangeRates[currency].ask,
            0)}
          </div>
          <h4 data-testid="header-currency-field">BRL</h4>
        </header>
      </div>
    );
  }
}

WalletHeader.propTypes = {
  email: PropTypes.func.isRequired,
  total: PropTypes.shape({
    reduce: PropTypes.func.isRequired,
  }).isRequired,
};

function mapStateToProps(state) {
  console.log(state.wallet.expenses);
  return {
    email: state.user.email,
    total: state.wallet.expenses,
  };
}

export default connect(mapStateToProps)(WalletHeader);
