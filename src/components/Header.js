import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email, totalExpenses } = this.props;
    return (
      <header>
        <div data-testid="email-field">{ email }</div>
        <div data-testid="total-field">{ totalExpenses }</div>
        <div data-testid="header-currency-field">BRL</div>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  totalExpenses: PropTypes.number.isRequired,
};

function mapStateToProps(state) {
  return {
    email: state.user.email,
    totalExpenses: state.wallet.totalExpenses,
  };
}

export default connect(mapStateToProps, null)(Header);
