import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  constructor() {
    super();
    this.totalField = this.totalField.bind(this);
  }

  // ideia do Bruno Landim !
  totalField() {
    const { total } = this.props;
    if (total.length === 0) { return 0; }
    const resultTotal = total.reduce((acc, {
      value,
      currency,
      exchangeRates }) => acc + parseFloat(value) * exchangeRates[currency].ask, 0);
    return resultTotal;
  }

  render() {
    const { email, currency } = this.props;
    return (
      <div>
        <p data-testid="email-field">{ email }</p>
        <p data-testid="total-field">{this.totalField()}</p>
        <p data-testid="header-currency-field">
          {' '}
          {currency}
          {' '}
        </p>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  email: state.user.email,
  total: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.any,

}.isRequired;

export default connect(mapStateToProps, null)(Header);
