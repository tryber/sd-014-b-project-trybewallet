import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends React.Component {

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
    const { email, despesas } = this.props;
    return (
      <header>
        <Link to="/"><h4>TrybeWallet</h4></Link>
        <p data-testid="email-field">{ email }</p>
        <p data-testid="header-currency-field">BRL</p>
        <p data-testid="total-field">  
          {despesas.length === 0 ? 'R$ 0.00' : `R$ ${this.totalExpense().toFixed(2)}`}
        </p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  despesas: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);

