import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ButtonComponent from './ButtonComponent';
import { deleteExpensesAction, editExpensesAction } from '../actions';

class TableComponent extends React.Component {
  constructor() {
    super();

    this.deleteClick = this.deleteClick.bind(this);
    this.editClick = this.editClick.bind(this);
    this.tHeadRender = this.tHeadRender.bind(this);
  }

  deleteClick({ target }) {
    const { expenses, dispatchExpensesToGlobal } = this.props;
    const newExpenses = expenses.filter(({ id }) => id !== Number(target.id));
    dispatchExpensesToGlobal(newExpenses);
  }

  async editClick({ target }) {
    const { expenses, dispatchExpenseEditToGlobal, expenseEditState } = this.props;
    const editExpense = expenses.filter(({ id }) => id === Number(target.id));
    await dispatchExpenseEditToGlobal(editExpense[0]);
    expenseEditState();
  }

  tHeadRender() {
    return (
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
    );
  }

  render() {
    const { expenses } = this.props;
    return (
      <table>
        {this.tHeadRender()}
        <tbody>
          {expenses.map((
            {
              id,
              description,
              tag,
              method,
              value,
              currency,
              exchangeRates: {
                [currency]: { ask, name } },
            },
          ) => (
            <tr key={ id }>
              <td>{description}</td>
              <td>{tag}</td>
              <td>{method}</td>
              <td>{value}</td>
              <td>{name}</td>
              <td>{Number(ask).toFixed(2)}</td>
              <td>{(Number(value) * Number(ask)).toFixed(2)}</td>
              <td>Real</td>
              <td>
                <ButtonComponent
                  id={ id }
                  onClick={ this.editClick }
                  text="Edit"
                  datatestid="edit-btn"
                />
                <ButtonComponent
                  id={ id }
                  onClick={ this.deleteClick }
                  text="Delete"
                  datatestid="delete-btn"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

TableComponent.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  dispatchExpensesToGlobal: PropTypes.func.isRequired,
  dispatchExpenseEditToGlobal: PropTypes.func.isRequired,
  expenseEditState: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchExpensesToGlobal: (expenses) => dispatch(deleteExpensesAction(expenses)),
  dispatchExpenseEditToGlobal: (expense) => dispatch(editExpensesAction(expense)),
});

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, mapDispatchToProps)(TableComponent);
