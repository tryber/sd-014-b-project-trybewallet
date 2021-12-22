import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Logo from './logo_trybe.png';
import './Header.css';

class Header extends Component {
  render() {
    const { email, expenses } = this.props;
    const totalExpense = expenses
      .reduce((acc, currentValue) => {
        const valueNumber = Number(currentValue.value);
        const coinsAsk = Number(currentValue.exchangeRates[currentValue.currency].ask);
        return acc + (valueNumber * coinsAsk);
      }, 0);
    return (
      <header className="header-component">
        <img className="trybe-logo" src={ Logo } alt="logo-trybe" />
        <article className="article-component">
          <p data-testid="email-field" className="email-header">
            { email }
          </p>
          <p data-testid="total-field" className="total-expense">
            { expenses.length > 0 ? totalExpense.toFixed(2) : '0.00' }
          </p>
          <p data-testid="header-currency-field" className="total-expense">
            BRL
          </p>
        </article>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.objectOf(PropTypes.object).isRequired,
};

function mapStateToProps(state) {
  return {
    email: state.user.email,
    expenses: state.wallet.expenses,
  };
}

export default connect(mapStateToProps)(Header);
