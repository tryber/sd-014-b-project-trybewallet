import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  handleChange() {
    const { values } = this.props;
    return values.reduce((acc, { currency, value, exchangeRates }) => {
      const valueReal = exchangeRates[currency].ask;
      const total = value * valueReal;
      return acc + total;
    }, 0);
  }

  render() {
    const { gettingEmail } = this.props;
    const formatPrice = (number) => Intl.NumberFormat(
      'pt-br',
      { style: 'currency', currency: 'BRL' },
    ).format((number));
    return (
      <header>
        <span data-testid="email-field">{gettingEmail}</span>
        <span data-testid="total-field">{ formatPrice(this.handleChange()) }</span>
        <span data-testid="header-currency-field">BRL</span>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  gettingEmail: state.user.email,
  values: state.wallet.expenses,
});

Header.propTypes = {
  gettingEmail: PropTypes.string.isRequired,
  values: PropTypes.objectOf.isRequired,
};

export default connect(mapStateToProps, null)(Header);
