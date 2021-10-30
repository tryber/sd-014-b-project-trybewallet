import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteExpenses } from '../../actions/expenses';

const tableHeader = [
  'Descrição',
  'Tag',
  'Método de pagamento',
  'Valor',
  'Moeda',
  'Câmbio utilizado',
  'Valor convertido',
  'Moeda de conversão',
  'Editar/Excluir',
];

class Table extends Component {
  btnDel(id) {
    const { deleteExpense } = this.props;
    deleteExpense(id);
  }

  btnEdit() {
    console.log('Editei');
  }

  renderTableExpenses() {
    const { expenses } = this.props;
    return (
      expenses.map((expense) => {
        const { currency, exchangeRates } = expense;
        const { [currency]: { name: currencyName, ask } } = exchangeRates;
        const value = +expense.value;
        const rate = +ask;
        return (
          <tr key={ expense.id }>
            <td>{expense.description}</td>
            <td>{expense.tag}</td>
            <td>{expense.method}</td>
            {/* <td>{`${currency} ${value.toFixed(2)}`}</td> */}
            <td>{value}</td>
            <td>{currencyName.split('/')[0]}</td>
            {/* <td>{`R$ ${rate.toFixed(2)}`}</td> */}
            <td>{rate.toFixed(2)}</td>
            {/* <td>{`R$ ${(expense.value * rate).toFixed(2)}`}</td> */}
            <td>{(expense.value * rate).toFixed(2)}</td>
            <td>Real</td>
            <td>
              <button type="button" onClick={ this.btnEdit }>Edit</button>
              <button
                type="button"
                onClick={ () => this.btnDel(expense.id) }
                data-testid="delete-btn"
              >
                Del
              </button>
            </td>
          </tr>
        );
      })
    );
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            {tableHeader.map((header) => <th key={ header }>{header}</th>)}
          </tr>
        </thead>
        <tbody>
          {this.renderTableExpenses()}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteExpense: (state) => dispatch(deleteExpenses(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);

Table.propTypes = {
  map: PropTypes.func,
  deleteExpense: PropTypes.func,
  expenses: PropTypes.arrayOf(
    PropTypes.shape(
      {
        id: PropTypes.number.isRequired,
        value: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.number,
        ]).isRequired,
        description: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
        method: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        exchangeRates: PropTypes.objectOf(
          PropTypes.shape(
            {
              USD: PropTypes.objectOf(
                PropTypes.shape(
                  {
                    code: PropTypes.string,
                    codein: PropTypes.string,
                    name: PropTypes.string,
                    high: PropTypes.string,
                    low: PropTypes.string,
                    varBid: PropTypes.string,
                    pctChange: PropTypes.string,
                    bid: PropTypes.string,
                    ask: PropTypes.string,
                    timestamp: PropTypes.string,
                    create_date: PropTypes.string,
                  },
                ),
              ),
            },
          ),
        ),
      },
    ),
  ).isRequired,
};

Table.defaultProps = {
  map: null,
  deleteExpense: null,
};
