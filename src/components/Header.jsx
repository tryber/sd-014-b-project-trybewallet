import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function Header({ email }) {
  return (
    <>
      <p data-testid="email-field">{email}</p>
      <p data-testid="total-field">0</p>
      <p data-testid="header-currency-field">BRL</p>
    </>
  );
}

const mapStateToProps = ({ user: { email } }) => ({
  email,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Header);
