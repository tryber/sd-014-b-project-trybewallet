import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { email, total, currency } = this.props;
    return (
      <div>
        <p data-testid="email-field">{ email }</p>
        <p data-testid="total-field">{ total }</p>
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
  // total: state.totalValueR.totalValueR,
  // expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.any,

}.isRequired;

export default connect(mapStateToProps, null)(Header);
