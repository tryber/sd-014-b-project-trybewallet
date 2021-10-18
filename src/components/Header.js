import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../pages/WalletPage.css';

class Header extends React.Component {
  render() {
    const { userInfo } = this.props;

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
          Despesas totais: R$: 0,00
        </h5>
        <h5 className="currency" data-testid="header-currency-field">BRL</h5>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  userInfo: state.user.email,
});

Header.propTypes = {
  userInfo: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, null)(Header);
