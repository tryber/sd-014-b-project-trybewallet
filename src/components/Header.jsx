import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <header>
        <span data-testid="email-field">
          Email:
          { email }
        </span>
        <span data-testid="total-field">Total R$ 0</span>
        <span data-testid="header-currency-field">BRL</span>
      </header>
    );
  }
}
const mapStateToProps = (state) => ({
  email: state.user.email });

export default connect(mapStateToProps, null)(Header);
