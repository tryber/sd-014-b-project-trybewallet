import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteExpense } from '../actions/deleteEspenseAction';

/**
 * Converte 'string' numérica em números com Number
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number
 */

class TableBody extends Component {
  handleClick(id) {
    const { deleteExpenses } = this.props;
    deleteExpenses(id);
  }

  render() {
    const { getExpensesArray } = this.props;
    return (
      <tbody>
        {getExpensesArray
          .map(({ description, tag, method, value, currency, id, exchangeRates }) => (
            <tr key={ id }>
              <td>{ description }</td>
              <td>{ tag }</td>
              <td>{ method }</td>
              <td>{ value }</td>
              <td>{ exchangeRates[currency].name.split('/')[0] }</td>
              <td>{ Number(exchangeRates[currency].ask).toFixed(2) }</td>
              <td>
                { Number(value * exchangeRates[currency].ask).toFixed(2) }
              </td>
              <td>Real</td>
              <td>
                <button
                  type="button"
                  className="btn btn-light"
                  data-testid="delete-btn"
                  onClick={ () => this.handleClick(id) }
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
      </tbody>
    );
  }
}

const mapStateToProps = (state) => ({
  getExpensesArray: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteExpenses: (id) => dispatch(deleteExpense(id)),
});

TableBody.propTypes = {
  getExpensesArray: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteExpenses: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TableBody);
