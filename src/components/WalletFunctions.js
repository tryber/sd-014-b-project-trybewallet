import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { deleteExpense } from '../actions';

class ExpensesToTable extends React.Component {
  deleteItem(id) {
    const { dispatchDeleteExpense, expenses } = this.props;
    const newExpenses = expenses.filter((expense) => expense.id !== id);
    return dispatchDeleteExpense(newExpenses);
  }

  render() {
    const { expenses } = this.props;
    const renderExpensesToTable = (
      expenses.map((purchase) => {
        const currency = purchase.exchangeRates[purchase.currency].name;
        const currencyName = currency.split('/');
        const exchangeRate = purchase.exchangeRates[purchase.currency].ask;
        const convertedValue = purchase.value * exchangeRate;
        return (
          <tr key={ purchase.id }>
            <td>{ purchase.description }</td>
            <td>{ purchase.tag }</td>
            <td>{ purchase.method }</td>
            <td>{ parseFloat(purchase.value) }</td>
            <td>{ currencyName[0] }</td>
            <td>{ parseFloat(exchangeRate).toFixed(2) }</td>
            <td>{ convertedValue.toFixed(2) }</td>
            <td>Real</td>
            <td>
              <button type="button" data-testid="edit-btn">Editar</button>
              <button
                type="button"
                data-testid="delete-btn"
                onClick={ () => this.deleteItem(purchase.id) }
                id={ purchase.id }
              >
                Apagar
              </button>
            </td>
          </tr>
        );
      })
    );

    return (
      <div>
        {renderExpensesToTable}
      </div>
    );
  }
}

ExpensesToTable.propTypes = {
  expenses: PropTypes.arrayOf(
    PropTypes.shape,
  ).isRequired,
  dispatchDeleteExpense: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchDeleteExpense: (newExpenses) => dispatch(deleteExpense(newExpenses)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesToTable);
