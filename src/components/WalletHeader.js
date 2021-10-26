import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class WalletHeader extends React.Component {
  render() {
    const { login, total } = this.props;
    const { email } = login;
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

const mapStateToProps = (state) => ({
  login: state.user,
  total: state.wallet.expenses,
});

WalletHeader.propTypes = {
  login: PropTypes.func.isRequired,
  total: PropTypes.shape({
    reduce: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps)(WalletHeader);
