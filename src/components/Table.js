import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import deleteSvg from '../delete-svgrepo-com.svg';
import { deleteExpense } from '../actions';

class Table extends Component {
  deleteExpense = (id) => {
    const { deleteExpenseSubmit } = this.props;
    deleteExpenseSubmit(id);
  }

  render() {
    const { expenses } = this.props;
    return (
      <table>
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
          {
            expenses.map((expense) => (
              <tr key={ expense.id }>
                <td>{ expense.description }</td>
                <td>{ expense.tag }</td>
                <td>{ expense.method }</td>
                <td>{ expense.value }</td>
                <td>{ expense.exchangeRates[expense.currency].name.split('/')[0] }</td>
                <td>{ Number(expense.exchangeRates[expense.currency].ask).toFixed(2) }</td>
                <td>
                  {
                    Number(expense.value * expense.exchangeRates[expense.currency]
                      .ask).toFixed(2)
                  }
                </td>
                <td>Real</td>
                <td>
                  <button
                    type="button"
                    data-testid="delete-btn"
                    onClick={ () => this.deleteExpense(expense.id) }
                  >
                    <img src={ deleteSvg } alt="Delete" height="15" width="15" />
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.arrayOf((
    PropTypes.any
  )).isRequired,
  deleteExpenseSubmit: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  deleteExpenseSubmit: (state) => dispatch(deleteExpense(state)),
});

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
