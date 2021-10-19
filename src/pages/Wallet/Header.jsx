import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  constructor(props) {
    super(props);
    this.totalExpenses = this.totalExpenses.bind(this);
  }

  totalExpenses() {
    const { expenses } = this.props;
    const mapExpenses = expenses.map(({ value, currency, exchangeRates }) => {
      const expenseObj = {
        value,
        currency,
        exchangeRates,
      };
      const valuesExchangeRates = Object.values(expenseObj.exchangeRates);
      const filterExpenseByCode = valuesExchangeRates.filter(({ code, codein }) => (
        code === currency && codein !== 'BRLT'
      ));
      const ask = filterExpenseByCode.map((element) => element.ask);
      const convert = parseFloat(value * ask).toFixed(2);
      return Number(convert);
    });
    const sumValues = mapExpenses.reduce((element, prevElement) => element + prevElement);
    return sumValues;
  }

  /**
 * Consultei o repositório do Ivanielson Cabral para resolver essa parte.
 * Link do repositório:
 * https://github.com/tryber/sd-014-b-project-trybewallet/tree/ivanielson-project-trybeallet
 */

  render() {
    const { mail, expenses } = this.props;
    return (
      <header data-testid="header-currency-field">
        <div data-testid="email-field">
          {`Email: ${mail}`}
        </div>
        <div data-testid="total-field">
          {`Dispesas Totais R$
          ${expenses.length > 0
        ? this.totalExpenses()
        : '0.00'} BRL`}
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  mail: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  mail: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
