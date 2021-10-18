import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  constructor() {
    super();

    this.totalExpense = this.totalExpense.bind(this);
  }

  totalExpense() {
    const { despesas } = this.props;
    return despesas.reduce((total, { currency, value, exchangeRates }) => {
      const quotation = exchangeRates[currency].ask;
      return total + (Number(quotation) * Number(value));
    }, 0);
  }

  render() {
    const { despesas } = this.props;
    const { email } = this.props;
    return (
      <header>
        <Link to="/"><h4>TrybeWallet</h4></Link>
        <span data-testid="email-field">{`E-mail: ${email}`}</span>
        <span data-testid="total-field">
          {despesas.length === 0 ? 'R$ 0.00' : `R$ ${this.totalExpense().toFixed(2)}`}
        </span>
        <span data-testid="header-currency-field">BRL</span>
      </header>
    );
  }
}

Header.propTypes = {
  despesas: PropTypes.arrayOf(PropTypes.any).isRequired,
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  despesas: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Header);
