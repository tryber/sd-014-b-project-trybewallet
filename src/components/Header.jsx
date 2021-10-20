import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const number = 0; // implementar soma das expenses
    const totalExpense = Intl.NumberFormat('pt-BR',
      { style: 'currency', currency: 'BRL' }).format(number).replace(',', '.');
    const { email } = this.props;
    return (
      <header>
        <span data-testid="email-field">{ email }</span>
        <span data-testid="total-field">{ totalExpense }</span>
        <span data-testid="header-currency-field">BRL</span>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  return {
    email: state.user.email,
  };
}

export default connect(mapStateToProps)(Header);
