import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { userEmail } = this.props;
    return (
      <header>
        <p data-testid="email-field">
          { userEmail }
        </p>
        <p data-testid="total-field">
          0
        </p>
        <p data-testid="header-currency-field">
          BRL
        </p>
      </header>
    );
  }
}

Header.propTypes = {
  userEmail: PropTypes.string.isRequired,
};

export default Header;
