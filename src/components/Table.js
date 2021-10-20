import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TableHeader from './TableHeader';
import { removeExpense as removeExpenseAction } from '../actions';

class Table extends Component {
  constructor() {
    super();

    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  handleDeleteClick(id) {
    const { removeExpense } = this.props;
    removeExpense(id);
  }

  render() {
    const { expenses, handleEditClick } = this.props;
    return (
      <table>
        <TableHeader />
        <tbody>
          { expenses.map((expense) => {
            const {
              id, description, tag, method, value, currency, exchangeRates,
            } = expense;
            const exchangeRateUsed = Number(exchangeRates[currency].ask);
            const convertedValue = Number(value) * exchangeRateUsed;
            return (
              <tr key={ id }>
                <td>{ description }</td>
                <td>{ tag }</td>
                <td>{ method }</td>
                <td>{ value }</td>
                <td>{ exchangeRates[currency].name.split('/')[0] }</td>
                <td>{ exchangeRateUsed.toFixed(2) }</td>
                <td>{ convertedValue.toFixed(2) }</td>
                <td>Real</td>
                <td>
                  <button
                    type="button"
                    data-testid="edit-btn"
                    onClick={ () => handleEditClick(id) }
                  >
                    Editar
                  </button>
                  <button
                    type="button"
                    data-testid="delete-btn"
                    onClick={ () => this.handleDeleteClick(id) }
                  >
                    Excluir
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

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  removeExpense: (id) => dispatch(removeExpenseAction(id)),
});

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object),
  removeExpense: PropTypes.func.isRequired,
  handleEditClick: PropTypes.func.isRequired,
};

Table.defaultProps = {
  expenses: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
