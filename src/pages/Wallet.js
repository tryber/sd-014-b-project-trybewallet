import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FormExpense from '../components/FormExpense';

class Wallet extends React.Component {
  render() {
    const { emailUser, totalField } = this.props;
    const totalFieldValue = totalField
      .reduce((acc, { value, currency, exchangeRates }) => (
        (Number(acc) + Number(value * exchangeRates[currency].ask)).toFixed(2)), 0);
    return (
      <>
        <header>
          <span data-testid="email-field">{ emailUser.email }</span>
          <span data-testid="total-field">{ totalFieldValue }</span>
          <span data-testid="header-currency-field">BRL</span>
        </header>
        <FormExpense />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  emailUser: state.user,
  totalField: state.wallet.expenses,
});

Wallet.propTypes = {
  email: PropTypes.objectOf(PropTypes.string),
}.isRequired;

export default connect(mapStateToProps, null)(Wallet);
