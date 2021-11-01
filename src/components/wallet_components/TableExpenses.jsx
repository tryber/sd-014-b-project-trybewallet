import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { HeaderTable } from '../index';
import { deleteExpense } from '../../actions';

class TableExpenses extends Component {
  // editExpense() {
  //
  // }

  deleteEachExpense(id) {
    const { deleteExpense } = this.props;
    deleteExpense(id);
  }

  render() {
    const { expensesValues } = this.props;
    return (
      <table>
        <HeaderTable />
        <tbody>
          { expensesValues.map(({
            id,
            value,
            description,
            currency,
            method,
            tag,
            exchangeRates,
          }) => (
            <tr key={ id }>
              <td>{description}</td>
              <td>{tag}</td>
              <td>{method}</td>
              <td>{value}</td>
              <td>{exchangeRates[currency].name.split('/')[0]}</td>
              <td>{Number(exchangeRates[currency].ask).toFixed(2)}</td>
              <td>{ Number(value * exchangeRates[currency].ask).toFixed(2) }</td>
              <td>Real</td>
              <td>
                <input
                  type="button"
                  value="Editar"
                  data-testid="edit-btn"
                  onClick={ this.editExpense }
                />
                <input
                  type="button"
                  value="Excluir"
                  data-testid="delete-btn"
                  onClick={ () => this.deleteExpense(id) }
                />
              </td>
            </tr>
          )) }
        </tbody>
      </table>
    );
  }
}

TableExpenses.propTypes = {
  expensesValues: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  expensesValues: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteEachExpense: (id) => dispatch(deleteExpense(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TableExpenses);
