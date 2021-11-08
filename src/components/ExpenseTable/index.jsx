import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class ExpenseTable extends React.Component {
  allExpenses(expenses) {
    return expenses.map((expense) => this.renderExpense(expense));
  }

  renderExpense({ id, value, description, currency, method, tag, exchangeRates }) {
    const ask = parseFloat(exchangeRates[currency].ask);
    const valueCurrent = parseFloat(value);
    const convertedValue = (valueCurrent * ask).toFixed(2);

    return (
      <tr key={ id } id={ id }>
        <td>{description}</td>
        <td>{tag}</td>
        <td>{method}</td>
        <td>{`${valueCurrent}`}</td>
        <td>{exchangeRates[currency].name}</td>
        <td>{`${ask.toFixed(2)}`}</td>
        <td>{convertedValue}</td>
        <td>Real</td>
        <td>
          <button type="button">Editar</button>
          <button type="button">Excluir</button>
        </td>
      </tr>
    );
  }

  render() {
    const { expenses } = this.props;
    return (
      <table>
        <tbody>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
          { this.allExpenses(expenses) }
        </tbody>
      </table>
    );
  }
}

ExpenseTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(ExpenseTable);
