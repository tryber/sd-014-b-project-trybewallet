import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import FormExpenses from './formExpenses';
import FormExpensesRedux from './FormExpensesRedux';

class Header extends React.Component {
  // Lógica do código abaixo, usada como referência do repositório do Gustavo Santanna
  // https://github.com/tryber/sd-014-b-project-trybewallet/pull/71/commits/681a2c22c34b03fa83ecc07f1f830417b89ae239
  // Foi utilizado a lógica do reducer para guardar o valor da soma e usar a função de converter despesas diretamente
  // no render.
  convertExpenses() {
    const { expenses } = this.props;
    if (expenses.length > 0) {
      const { exchangeRates } = expenses[0];
      return expenses.reduce((acc, { value, currency }) => {
        const actualCurrency = Object.entries(exchangeRates)
          .find((item) => item[1].code === currency);
        const actualValue = actualCurrency[1].ask * value;
        acc += actualValue;
        return acc;
      }, 0);
    }
  }

  render() {
    const { user } = this.props;
    const { expenses } = this.props;

    return (
      <header>
        <h1 data-testid="email-field">{user}</h1>
        <h1 data-testid="total-field">
          {`R$ ${expenses.length > 1 ? this.convertExpenses() : 0}`}
        </h1>
        <h3 data-testid="header-currency-field">BRL</h3>
        <FormExpensesRedux />
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.email,
  wallet: state.wallet.walletInfo,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Header);

Header.propTypes = PropTypes.objectOf(PropTypes.any).isRequired;
