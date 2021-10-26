import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { user, wallet } = this.props;

    const totalValue = wallet.reduce((acc, current) => {
      const value = Number(current.value);
      const askingPrice = Number(current.exchangeRates[current.currency].ask);
      return acc + (value * askingPrice);
    }, 0);

    return (
      <header>
        <span data-testid="email-field">{ user }</span>
        <span data-testid="total-field">{totalValue}</span>
        <span data-testid="header-currency-field">BRL</span>
      </header>
    );
  }
}

Header.propTypes = {
  user: PropTypes.string.isRequired,
  wallet: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  return {
    user: state.user.email,
    wallet: state.wallet.expenses,
  };
}

export default connect(mapStateToProps)(Header);
