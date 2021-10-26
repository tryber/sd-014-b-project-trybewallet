import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  /* constructor() {
    super();
    this.state = {
      coinCurrency: '',
    };
    // this.expansesInfo = this.expansesInfo.bind(this);
  }

   expansesInfo() {
    const { expenses } = this.props;
    if (expenses.length === 0) {
      this.setState({
        coinCurrency: 'BRL',
      });
    } else {
      this.setState({
        coinCurrency: expenses.currency,
      });
    }
  } */

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
