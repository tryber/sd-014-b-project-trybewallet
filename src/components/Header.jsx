import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { emailData: { email } } = this.props;
    return (
      <header>
        <span data-testid="email-field">{ email }</span>
        <p data-testid="total-field">0</p>
        <span data-testid="header-currency-field">BRL</span>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  emailData: state.user,
});

export default connect(mapStateToProps, null)(Header);
