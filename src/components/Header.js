import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../pages/WalletPage.css';

class Header extends React.Component {
  render() {
    const { userInfo, totalValue } = this.props;
    return (
      <header className="header-wallet-page">
        <h5 className="title-wallet">TrybeWallet</h5>
        <h5 className="email-header" data-testid="email-field">
          Email:
          {userInfo}
        </h5>
        <h5
          className="cost-total"
          data-testid="total-field"
        >
          Despesas totais: R$:
          { !totalValue ? 0 : totalValue.toFixed(2) }
        </h5>
        <h5 className="currency" data-testid="header-currency-field">BRL</h5>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  userInfo: state.user.email,
  totalValue: state.wallet.totalValue,
});

Header.propTypes = {
  userInfo: PropTypes.func.isRequired,
  totalValue: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, null)(Header);
