import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { removeExpenses } from '../actions';

const title = [
  'Descrição',
  'Tag',
  'Método de pagamento',
  'Valor',
  'Moeda',
  'Câmbio utilizado',
  'Valor convertido',
  'Moeda de conversão',
  'Editar/Excluir'];

class ExpenseTable extends Component {
  deleteExpense(id) {
    const { removeExpense } = this.props;
    return (
      <button
        className="btn-icon btn btn-outline-danger"
        type="button"
        data-testid="delete-btn"
        onClick={ () => { removeExpense(id); } }
      >
        <FaTrashAlt />
      </button>
    );
  }

  editExpense(id) {
    const { removeExpense } = this.props;
    return (
      <button
        className="btn-icon btn btn-outline-warning"
        type="button"
        data-testid="delete-btn"
        onClick={ () => { removeExpense(id); } }
      >
        <FaEdit />
      </button>
    );
  }

  render() {
    const { expenses } = this.props;
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            { title.map((element, index) => <th key={ index + 1 }>{ element }</th>)}
          </tr>
        </thead>
        <tbody>
          { expenses.length > 0 && expenses.map((expense) => {
            const currentCurrency = expense.exchangeRates[expense.currency];
            const nameCurrency = currentCurrency.name.split('/');
            const valueToNumber = Number(expense.value);
            const currentAsk = Number(currentCurrency.ask);
            return (
              <tr key={ expense.id }>
                <td>{ expense.description }</td>
                <td>{ expense.tag }</td>
                <td>{ expense.method }</td>
                <td>{ expense.value }</td>
                <td>{ nameCurrency[0] }</td>
                <td>{ currentAsk.toFixed(2) }</td>
                <td>{ (valueToNumber * currentAsk).toFixed(2) }</td>
                <td>Real</td>
                <td>
                  { this.editExpense(expense.id) }
                  { this.deleteExpense(expense.id) }
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  removeExpense: (state) => dispatch(removeExpenses(state)),
});

ExpenseTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeExpense: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseTable);
