import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const number = 0; // soma das expenses
    const totalExpense = Intl.NumberFormat('pt-BR',
      { style: 'currency', currency: 'BRL' }).format(number).replace(',', '.');
    const { user } = this.props;
    return (
      <header>
        <span data-testid="email-field">{ user }</span>
        <span data-testid="total-field">{ totalExpense }</span>
        <span data-testid="header-currency-field">BRL</span>
      </header>
    );
  }
}

Header.propTypes = {
  user: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  return {
    user: state.user.email,
  };
}

/* const { user } = mapStateToProps((state) => state.user.email); */

export default connect(mapStateToProps)(Header);
