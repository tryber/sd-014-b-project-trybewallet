import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// consultei o seguinte repositório como inspiração para esse componente https://github.com/tryber/sd-014-b-project-trybewallet/blob/michaelcaxias-trybewallet/src/components/Header/Header.jsx

class Header extends Component {
  render() {
    const { email, expenses } = this.props;
    const totalExpense = expenses.reduce((acc, { currency, value, exchangeRates }) => (
      acc + (value * exchangeRates[currency].ask)
    ), 0).toFixed(2);
    return (
      <header>
        <Link to="/">
          Home
        </Link>
        <div>
          <span data-testid="email-field">
            Email:
            {email}
          </span>
        </div>
        <div>
          <span>Despesa Total:</span>
          <span data-testid="total-field">
            {`R$ ${totalExpense}`}
          </span>
          <span data-testid="header-currency-field">BRL</span>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string,
  currencies: PropTypes.array,
  expenses: PropTypes.array,
}.isRequired;

export default connect(mapStateToProps)(Header);
