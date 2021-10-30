import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Button from './Button';
import { removeExpenseFromTable } from '../actions/index';

import './table.css';

class TableExpenses extends Component {
  constructor() {
    super();

    this.mapExpenses = this.mapExpenses.bind(this);
    this.headerTable = this.headerTable.bind(this);
    this.deleteExpense = this.deleteExpense.bind(this);
  }

  deleteExpense(id) {
    const { removeExpense, arrayExpenses } = this.props;
    const newArrayExpenses = arrayExpenses.filter((expense) => expense.id !== id);
    removeExpense(newArrayExpenses);
  }

  headerTable() {
    return (
      <thead>
        <th>Descrição</th>
        <th>Tag</th>
        <th>Método de pagamento</th>
        <th>Valor</th>
        <th>Moeda</th>
        <th>Câmbio utilizado</th>
        <th>Valor convertido</th>
        <th>Moeda de conversão</th>
        <th>Editar/Excluir</th>
      </thead>
    );
  }

  mapExpenses() {
    const { arrayExpenses } = this.props;
    const renderExpenses = arrayExpenses
      .map(({ id, value, description, tag, method, currency, exchangeRates }) => {
        const exchangeUsed = exchangeRates[currency].name.split('/');
        const finalValue = value * exchangeRates[currency].ask;
        const formatedValue = finalValue.toFixed(2);
        const formatedCoins = exchangeRates[currency].ask;
        const valueCoins = parseFloat(formatedCoins).toFixed(2);

        return (
          <tr key={ id }>
            <td>{ description }</td>
            <td>{ tag }</td>
            <td>{ method }</td>
            <td>{ value }</td>
            <td>{ exchangeUsed[0] }</td>
            <td>{ valueCoins }</td>
            <td>{ formatedValue }</td>
            <td>Real</td>
            <td>
              <Button
                text="Edit"
                data-testid="edit-btn"
                onClick={ () => {} }
              />
              /
              <Button
                text="Trash"
                data-testid="delete-btn"
                onClick={ () => this.deleteExpense(id) }
              />
            </td>
          </tr>);
      });
    return renderExpenses;
  }

  render() {
    return (
      <table>
        { this.headerTable() }
        <tbody>
          { this.mapExpenses() }
        </tbody>
      </table>
    );
  }
}

TableExpenses.propTypes = {
  arrayExpenses: PropTypes.shape({
    map: PropTypes.func,
    filter: PropTypes.func,
  }).isRequired,
  removeExpense: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  arrayExpenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  removeExpense: (expense) => dispatch(removeExpenseFromTable(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TableExpenses);
