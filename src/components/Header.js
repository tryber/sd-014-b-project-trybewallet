import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import SelectCurrency from './SelectCurrency';
import './Header.css';

class Header extends React.Component {
  render() {
    const { email, purchases } = this.props;
    const totalPurchases = purchases
      .reduce((acc, current) => {
        const valuePurchase = current.value;
        const currentCurrency = current.exchangeRates[current.currency].ask;
        return acc + (valuePurchase * currentCurrency);
      }, 0);

    return (
      <div className="container-header">
        <h1>TrybeWallet</h1>
        <span data-testid="email-field">{ email }</span>
        <div>
          <span>Despesa total: </span>
          <span data-testid="total-field">{ totalPurchases.toFixed(2) }</span>
          <span data-testid="header-currency-field"> BRL</span>
        </div>
        {/* <SelectCurrency id="select-currency-header" /> */}
      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  purchases: PropTypes.arrayOf(PropTypes.shape({
    reduce: PropTypes.func,
  })).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  purchases: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
