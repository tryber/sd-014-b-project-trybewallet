import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './css/header.css';

class Header extends Component {
  render() {
    const { email, total } = this.props;

    return (
      <header className="header">
        <img
          src="https://www.acate.com.br/wp-content/uploads/2020/01/trybe.png"
          alt="Logo da Trybe"
        />
        <div className="user-info">
          <p data-testid="email-field">
            {`Email: ${email}`}
          </p>
          <p data-testid="total-field">
            {`Despesa total: ${total > 0 ? total.toFixed(2) : 0}`}
            <span data-testid="header-currency-field">
              {' BRL'}
            </span>
          </p>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
};

export default Header;
