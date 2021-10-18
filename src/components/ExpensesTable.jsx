import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  DELETE_EXPENSE, INIT_EDIT_EXPENSE, getConversion,
} from '../actions';
import DATA from '../data';

class ExpensesTable extends Component {
  // componentDidMount() { console.log('montou'); }

  // componentDidUpdate() { console.log('atualizou'); }

  getCambio = (obj, value) => Object.entries(obj).find((item) => item[0] === value)[1];

  deleteValue = (id) => {
    const { expenses, erase } = this.props;
    const newExpenses = expenses.filter((item) => item.id !== id);
    erase(newExpenses);
  };

  editExpense = (expense) => {
    const { edit } = this.props;
    const { id, value, description, currency,
      method, tag, exchangeRates } = expense;
    edit({ id, value, description, currency, method, tag, exchangeRates });
  }

  render() {
    const { expenses } = this.props;
    return (
      <table>
        <thead>
          <tr>
            { DATA.tableHeader
              .map((item) => <th key={ item } scope="header">{ item }</th>) }
          </tr>
        </thead>
        <tbody>
          { expenses.map((item, ind) => {
            const { id, value, description, currency,
              method, tag, exchangeRates } = item;
            const rate = +(this.getCambio(exchangeRates, currency).ask);
            return (
              <tr key={ `tr${ind}` }>
                <td>{ description }</td>
                <td>{ tag }</td>
                <td>{ method }</td>
                <td>{ value }</td>
                <td>
                  { this.getCambio(exchangeRates, currency).name.match(/[^/]+/gi)[0] }
                </td>
                <td>{ rate.toFixed(2) }</td>
                <td>{ getConversion(expenses)[ind].toFixed(2) }</td>
                <td>Real</td>
                <td>
                  <button
                    type="button"
                    onClick={ () => this.editExpense(item) }
                    data-testid="edit-btn"
                  >
                    ✎
                  </button>
                  <button
                    type="button"
                    onClick={ () => this.deleteValue(id) }
                    data-testid="delete-btn"
                  >
                    X
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

ExpensesTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
  erase: PropTypes.func.isRequired,
  edit: PropTypes.func.isRequired,
};

const mapState = ({ wallet: { expenses } }) => ({ expenses });

const mapDispatch = (dispatch) => ({
  erase: (value) => dispatch(DELETE_EXPENSE(value)),
  edit: (value) => dispatch(INIT_EDIT_EXPENSE(value)),
});

export default connect(mapState, mapDispatch)(ExpensesTable);
