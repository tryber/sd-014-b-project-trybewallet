import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { editExpense as editExpenseAction, excludeExpenses } from '../actions';
import ButtonEdit from './ButtonEdit';
import ButtonDelete from './ButtonDelete';
import '../css/tableCss.css';

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.getBrlCurrency = this.getBrlCurrency.bind(this);
  }

  getBrlCurrency(index, iniciais) {
    const { expenses } = this.props;
    const brlCurrency = Object.values(expenses[index].exchangeRates)
      .find((item) => item.code === iniciais);
    return brlCurrency.ask;
  }

  handleEditClick(id) {
    const { expenses, editExpenseId } = this.props;
    const expenseIndex = expenses.find((expense) => expense.id === id);
    editExpenseId(expenseIndex.id);
  }

  handleDeleteClick(id) {
    const { expenses, excludeExpense } = this.props;
    const newExpenses = expenses.filter((expense) => expense.id !== id);
    excludeExpense(newExpenses);
  }

  roundNumber(value, i, cur) {
    return Math.round(Number(value) * Number(this.getBrlCurrency(i, cur)) * 100) / 100;
  }

  render() {
    const { expenses } = this.props;
    return (
      <table className="table-container">
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
          {expenses.map((
            { id, description, tag, method, value, exchangeRates, currency },
            index,
          ) => (
            <tr key={ id }>
              <td>{description}</td>
              <td>{tag}</td>
              <td>{method}</td>
              <td>{value}</td>
              <td>{exchangeRates[currency].name}</td>
              <td>{Number(exchangeRates[currency].ask).toFixed(2)}</td>
              <td>{this.roundNumber(value, index, currency)}</td>
              <td>Real</td>
              <td>
                <ButtonEdit
                  dataTestId="edit-btn"
                  onClick={ () => this.handleEditClick(id) }
                />
                <ButtonDelete
                  dataTestId="delete-btn"
                  onClick={ () => this.handleDeleteClick(id) }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
  loading: state.wallet.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  excludeExpense: (expenses) => dispatch(excludeExpenses(expenses)),
  editExpenseId: (newExpenses) => dispatch(editExpenseAction(newExpenses)),
});

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  editExpenseId: PropTypes.func.isRequired,
  excludeExpense: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
