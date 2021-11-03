import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { email, expenses } = this.props;

    const totalValue = expenses.reduce((acc, current) => {
      const value = Number(current.value);
      const askingPrice = Number(current.exchangeRates[current.currency].ask);
      return acc + (value * askingPrice);
    }, 0);

    // https://github.com/tryber/sd-014-b-project-trybewallet/pull/42/files

    return (
      <header>
        TrybeWallet
        <div data-testid="email-field">
          { email }
        </div>
        <div data-testid="total-field">
          { totalValue }
        </div>
        <div data-testid="header-currency-field">
          BRL
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string,
  expenses: PropTypes.arrayOf(PropTypes.shape({})),
}.isRequired;

export default connect(mapStateToProps)(Header);
