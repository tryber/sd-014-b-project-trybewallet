import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateExpenses } from '../actions';

class Table extends React.Component {
  deleteItem(id) {
    const { expenses, submitUpdateExpenses } = this.props;
    const mutedExpenses = [...expenses];
    mutedExpenses.forEach((expense, index) => {
      if (expense.id === id) {
        mutedExpenses.splice(index, 1);
      }
    });
    /*
      Poderia atualizar o id de todas as despesas toda vez que
      o array atualizar:

      mutedExpenses.forEach((expense, i) => {
        expense.id = i;
      });
    */
    submitUpdateExpenses(mutedExpenses);
  }

  renderItemsTable(expense, index) {
    const nameCurrency = expense.exchangeRates[expense.currency].name;
    let exchange = parseFloat(expense.exchangeRates[expense.currency].ask);
    let convertedValue = expense.value * exchange;
    exchange = exchange.toFixed(2);
    convertedValue = convertedValue.toFixed(2);

    return (
      <tr key={ index }>
        <td>{ expense.description }</td>
        <td>{ expense.tag }</td>
        <td>{ expense.method }</td>
        <td>{ expense.value }</td>
        <td>{ nameCurrency.split('/')[0] }</td>
        <td>{ exchange }</td>
        <td>{ convertedValue }</td>
        <td>Real</td>
        <td>
          <button type="button">Editar</button>
          <button
            type="button"
            data-testid="delete-btn"
            onClick={ () => this.deleteItem(expense.id) }
          >
            Excluir
          </button>
        </td>
      </tr>
    );
  }

  render() {
    const { expenses } = this.props;
    return (
      <table border="1">
        <thead>
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
        </thead>
        <tbody>
          { expenses.map((expense, i) => this.renderItemsTable(expense, i)) }
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  submitUpdateExpenses: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  submitUpdateExpenses: (expenses) => dispatch(updateExpenses(expenses)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
