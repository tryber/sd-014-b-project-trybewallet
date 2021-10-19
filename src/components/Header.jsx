import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './header.css';

class Header extends Component {
  render() {
    // const { email } = this.props;
    return (
      <header className="header">
        <img
          src="https://www.acate.com.br/wp-content/uploads/2020/01/trybe.png"
          alt="Logo da Trybe"
          height="100px"
        />
        <div className="user-info">
          <p data-testid="email-field">
            Email:
          </p>
          <p data-testid="total-field">
            Despesa Total:
          </p>
          <span data-testid="header-currency-field">
            BRL
          </span>
        </div>
      </header>
    );
  }
}

// Header.propTypes = {
//   email: PropTypes.string.isRequired,
// };

export default Header;
