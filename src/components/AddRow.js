import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { delExpenses } from '../actions';

class AddRow extends React.Component {
  valorTotal = (ask, value) => (Number(ask * value)).toFixed(2);

  deleteExpense = (id) => {
    const { deleteId } = this.props;
    deleteId(id);
  }

  render() {
    const { expensesWallet } = this.props;
    return (
      expensesWallet.map((expense) => (
        <tr key={ expense.id }>
          <td>{ expense.description }</td>
          <td>{ expense.tag }</td>
          <td>{ expense.method }</td>
          <td>{ expense.value }</td>
          <td>{ expense.exchangeRates[expense.currency].name}</td>
          <td>{ (Number(expense.exchangeRates[expense.currency].ask)).toFixed(2) }</td>
          <td>
            { this.valorTotal(
              expense.value, expense.exchangeRates[expense.currency].ask,
            ) }
          </td>
          <td>Real</td>
          <td>
            <button type="button">Editar</button>
            <button
              data-testid="delete-btn"
              onClick={ () => this.deleteExpense(expense.id) }
              type="button"
            >
              Excluir
            </button>
          </td>
        </tr>
      ))
    );
  }
}

const mapStateToProps = (state) => ({
  expensesWallet: state.wallet.expenses,
});

AddRow.propTypes = {
  expensesWallet: PropTypes.arrayOf([
    PropTypes.any,
  ]),
  deleteId: PropTypes.func.isRequired,
};

AddRow.defaultProps = {
  expensesWallet: [],
};

const mapDispatchToProps = (dispatch) => ({
  deleteId: (id) => dispatch(delExpenses(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddRow);
