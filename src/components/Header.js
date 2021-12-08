import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/Header.css';
import md5 from 'crypto-js/md5';
import trybeWalletLogo from '../images/logo_icon.png';

class Header extends Component {
  // Source: https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

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
        <div className="total-expenses-container">
          <span>Despesa Total: </span>
          <span data-testid="total-field">{ totalExpenses.toLocaleString() }</span>
          <span data-testid="header-currency-field">BRL</span>
        </div>
        <div className="user-info-container">
          <img className="profile-picture" src={ `https://www.gravatar.com/avatar/${md5(email).toString()}` } alt="Foto de Perfil" />
          <div className="name-and-email">
            <div>{ name }</div>
            <div data-testid="email-field">{ email }</div>
          </div>
        </div>
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
