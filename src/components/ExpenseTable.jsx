import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeExpenseAction } from '../actions';

class ExpenseTable extends React.Component {
  render() {
    const { expenses, removeExpense } = this.props;
    return (
      <table>
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
          { expenses.length && expenses.map((expense) => {
            const { currency } = expense;
            const currencyName = expense.exchangeRates[currency].name.split('/')[0];
            const currencyValue = expense.exchangeRates[currency].ask;
            const convert = currencyValue * expense.value;
            return (
              <tr key={ expense.id }>
                <td>{ expense.description }</td>
                <td>{ expense.tag }</td>
                <td>{ expense.method }</td>
                <td>{ expense.value }</td>
                <td>{ currencyName }</td>
                <td>{ Number(currencyValue).toFixed(2) }</td>
                <td>{ convert.toFixed(2) }</td>
                <td>Real</td>
                <td>{ expense.currency }</td>
                <td>
                  <button
                    data-testid="delete-btn"
                    type="button"
                    onClick={ () => removeExpense({ id: expense.id }) }
                  >
                    Remover
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

ExpenseTable.propTypes = {
  removeExpense: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  removeExpense: (state) => dispatch(removeExpenseAction(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseTable);
