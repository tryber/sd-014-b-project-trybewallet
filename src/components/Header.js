import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/Header.css';
import md5 from 'crypto-js/md5';
import trybeWalletLogo from '../images/logo_icon.png';

class Header extends Component {
  render() {
    let { email, name, totalExpenses } = this.props;
    email = email || localStorage.getItem('trybe-wallet-email');
    name = name || localStorage.getItem('trybe-wallet-name');
    console.log(email);
    return (
      <header>
        <div className="logo-header-container">
          <img src={ trybeWalletLogo } alt="logo icon" />
          <span className="trybe">TRYBE</span>
          <span className="wallet">Wallet</span>
        </div>
        <img className="profile-picture" src={ `https://www.gravatar.com/avatar/${md5(email).toString()}` } alt="Foto de Perfil" />
        <div>{ name }</div>
        <div data-testid="email-field">{ email }</div>
        <div data-testid="total-field">{ totalExpenses }</div>
        <div data-testid="header-currency-field">BRL</div>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  totalExpenses: PropTypes.number,
};

Header.defaultProps = {
  totalExpenses: 0,
};

function mapStateToProps(state) {
  return {
    name: state.user.name,
    email: state.user.email,
    totalExpenses: state.wallet.totalExpenses,
  };
}

export default connect(mapStateToProps, null)(Header);
