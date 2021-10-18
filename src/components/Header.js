import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Header extends Component {
  render() {
    const { userEmail, totalValue } = this.props;
    return (
      <header>
        <h2 data-testid="email-field">{ userEmail }</h2>
        <p data-testid="total-field">{ totalValue }</p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }
}

Header.propTypes = {
  totalValue: PropTypes.number.isRequired,
  userEmail: PropTypes.string.isRequired,
};

export default Header;
