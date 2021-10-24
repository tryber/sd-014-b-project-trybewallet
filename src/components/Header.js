import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function Header({ user }) {
  return (
    <header>
      <span data-testid="email-field">{user}</span>
      <span data-testid="total-field">0</span>
      <span data-testid="header-currency-field">BRL</span>
    </header>
  );
}

Header.propTypes = {
  user: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({ user: state.user.email });

export default connect(mapStateToProps)(Header);
