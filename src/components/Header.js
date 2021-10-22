import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../style/header.css';

class Header extends Component {
  render() {
    const { email } = this.props;

    return (

      <header className="container-header">
        <h2 className="header-title">
          Trybe
          <p>Wallet</p>
        </h2>
        <div data-testid="email-field">
          { email }
        </div>
        <div data-testid="total-field" className="div-total">
          0
          <div data-testid="header-currency-field">
            BRL
          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Header);
