import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FormRender from '../components/FormRender';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.addExpenses = this.addExpenses.bind(this);
  }

  // consultei o repositorio do meu colega matheus silveira para implementar o
  // metodo reduce https://github.com/tryber/sd-014-b-project-trybewallet/pull/66
  // com a ajuda do kauan carvalho

  addExpenses() {
    const { expenses } = this.props;
    const sumExpenses = expenses.reduce((acc, expense) => {
      const currencyValue = Number(expense.exchangeRates[expense.currency].ask);
      acc += Number(expense.value) * currencyValue;
      return acc;
    }, 0);
    return sumExpenses;
  }

  render() {
    const { email } = this.props;
    return (
      <div>
        <header data-testid="email-field">
          <p>{email}</p>
          <p data-testid="total-field">{this.addExpenses().toFixed(2)}</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
        <FormRender />
      </div>
    );
  }
}

const mapStateToProps = ({ user: { email }, wallet: { expenses } }) => ({
  email,
  expenses,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, null)(Wallet);
