import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateSpentTotal, updateExpenses } from '../../actions';

class ExpenseTable extends React.Component {
  deleteExpense(expense) {
    const { expenses, updateExps, updateSpent } = this.props;

    const filteredExpenses = expenses.filter((expenseCurrent) => (
      expenseCurrent.id !== expense.id
    ));
    updateExps(filteredExpenses);
    updateSpent();
  }

  renderAllExpenses() {
    const { expenses } = this.props;
    return expenses.map((expense) => this.renderExpense(expense));
  }

  renderExpense(expense) {
    const { id, value, description, currency, method, tag, exchangeRates } = expense;
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
          <button
            type="button"
            data-testid="delete-btn"
            onClick={ () => this.deleteExpense(expense) }
          >
            Excluir
          </button>
        </td>
      </tr>
    );
  }

  render() {
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
          { this.renderAllExpenses() }
        </tbody>
      </table>
    );
  }
}

ExpenseTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateExps: PropTypes.func.isRequired,
  updateSpent: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  updateExps: (payload) => dispatch(updateExpenses(payload)),
  updateSpent: () => dispatch(updateSpentTotal()),
});

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseTable);
