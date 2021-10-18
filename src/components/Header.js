import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from './Form';

class Header extends Component {
  constructor() {
    super();
    this.showTotalValue = this.showTotalValue.bind(this);
  }

  showTotalValue() {
    const { expenses } = this.props;
    const values = expenses.map(({ value, currency, exchangeRates }) => ({
      value,
      currency,
      currencyQuote: Object.values(exchangeRates).filter(({ code, codein }) => (
        code === currency && codein !== 'BRLT'
      )).map(({ ask }) => ask).toString(),
    }));
    const valueTotal = values.map(({ value, currencyQuote }) => ({
      totalValue: parseFloat(Math.fround(value * currencyQuote).toFixed(2)),
    }).totalValue);
    return valueTotal.reduce((previousValue, currentValue) => (
      previousValue + currentValue
    ), 0).toFixed(2);
  }

  render() {
    const { email } = this.props;
    return (
      <header>
        <section>
          <p data-testid="email-field">{`E-mail: ${email}`}</p>
        </section>
        <section>
          <p data-testid="total-field">
            {`Despesa Total: R$ ${this.showTotalValue()}` }
          </p>
          <p data-testid="header-currency-field">BRL</p>
        </section>
        <Form />
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
