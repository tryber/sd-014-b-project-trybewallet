import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actionDeleteExpense, actionEditExpense } from '../actions';
import { Button } from './index';

class Table extends Component {
  constructor(props) {
    super(props);

    this.createTable = this.createTable.bind(this);
    this.deleteButton = this.deleteButton.bind(this);
    this.editButton = this.editButton.bind(this);
  }

  deleteButton(id) {
    const { expenses, deleteExpense } = this.props;
    const expensesUpdate = expenses.filter((item) => (item.id !== id));
    deleteExpense(expensesUpdate);
  }

  editButton(id) {
    const { editExpense } = this.props;
    editExpense(id);
  }

  createTable() {
    const { expenses } = this.props;
    return expenses.map((item) => {
      const currencyInfo = item.exchangeRates[item.currency];
      return (
        <tr key={ item.id }>
          <td>{item.description}</td>
          <td>{item.tag}</td>
          <td>{item.method}</td>
          <td>{item.value}</td>
          <td>{currencyInfo.name.split('/')[0]}</td>
          <td>{parseFloat(currencyInfo.ask).toFixed(2)}</td>
          <td>{(parseFloat(item.value) * parseFloat(currencyInfo.ask)).toFixed(2)}</td>
          <td>Real</td>
          <td>
            <Button
              name="Editar"
              testid="edit-btn"
              onHandleClick={ () => this.editButton(item.id) }
            />
            <Button
              name="Excluir"
              testid="delete-btn"
              onHandleClick={ () => this.deleteButton(item.id) }
            />
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <table>
        <thead>
          <tr className="table-header">
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
          {this.createTable()}
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object),
  deleteExpense: PropTypes.func.isRequired,
  editExpense: PropTypes.func.isRequired,
};

Table.defaultProps = {
  expenses: [],
};

const mapStateToProps = ({ wallet }) => ({
  expenses: wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteExpense: (payload) => dispatch(actionDeleteExpense(payload)),
  editExpense: (payload) => dispatch(actionEditExpense(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
