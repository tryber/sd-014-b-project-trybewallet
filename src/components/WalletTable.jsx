import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteExpense, updateTotal } from '../actions';

class ExpensesTable extends Component {
  delExpense({ target }, expenses, delExp, updtTotal) {
    const expenseId = parseFloat(target.id.split('-')[0]);
    const filteredExpenses = expenses.filter((e) => e.id !== expenseId);
    delExp(filteredExpenses);
    updtTotal();
  }

  renderExpenses(exp, delExp, updtTotal) {
    return exp.map(({ id, description, tag, method, value, currency, exchangeRates }) => {
      const val = parseFloat(value);
      const ask = parseFloat(exchangeRates[currency].ask);
      return (
        <tr key={ id } id={ id }>
          <td>{description}</td>
          <td>{tag}</td>
          <td>{method}</td>
          <td>{`${val}`}</td>
          <td>{exchangeRates[currency].name}</td>
          <td>{`${ask.toFixed(2)}`}</td>
          <td>{`${(val * ask).toFixed(2)}`}</td>
          <td>Real</td>
          <td>
            <button
              type="button"
              id={ `${id}-delete-btn` }
              data-testid="delete-btn"
              onClick={ (evt) => this.delExpense(evt, exp, delExp, updtTotal) }
            >
              Excluir
            </button>
          </td>
        </tr>
      );
    });
  }

  render() {
    const { expenses, delExp, updtTotal } = this.props;
    return (
      <table className="wallet-table">
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
          { this.renderExpenses(expenses, delExp, updtTotal) }
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  delExp: (payload) => dispatch(deleteExpense(payload)),
  updtTotal: () => dispatch(updateTotal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTable);

ExpensesTable.propTypes = {
  expenses: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  delExp: PropTypes.func.isRequired,
  updtTotal: PropTypes.func.isRequired,
};
