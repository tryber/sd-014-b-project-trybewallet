import React from 'react';
import { connect } from 'react-redux';

function Header(user) {
  const totalField = 
  return (
    <header>
      <span data-testid="email-field">{ `E-mail: ${user}` }</span>
      <span data-testid="total-field">{ 0 }</span>
      <span data-testid="header-currency-field">BRL</span>
    </header>
  );
}

const mapStateToProps = (state) => ({
  user: state.user.email,
});

export default connect(mapStateToProps, null)(Header);
