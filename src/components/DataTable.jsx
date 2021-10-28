import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteExpense } from '../actions';
import TableButton from './TableButton';

class DataTable extends React.Component {
  constructor() {
    super();
    this.getQuote = this.getQuote.bind(this);
    this.getCurrencyName = this.getCurrencyName.bind(this);
  }

  getQuote(arrayQuotes, currency) {
    const quote = Object.values(arrayQuotes).filter(({ code, codein }) => (
      code === currency && codein !== 'BRLT'
    )).map(({ ask }) => ask).toString();
    return quote;
  }

  getCurrencyName(arrayQuotes, currency) {
    const currencyName = Object.values(arrayQuotes).filter(({ code, codein }) => (
      code === currency && codein !== 'BRLT'
    )).map(({ name }) => name).toString();
    const name = currencyName.split('/')[0];
    if (name === 'Dólar Americano') return 'Dólar Comercial';
    return name;
  }

  render() {
    const { toRecoverExpenses, expenseDelete } = this.props;
    return (
      <table className="table table-striped table-hover mt-4">
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
          {toRecoverExpenses
            .map(({ id, description, value, currency, method, tag, exchangeRates }) => (
              <tr key={ id }>
                <td>{ description }</td>
                <td>{ tag }</td>
                <td>{ method }</td>
                <td>{ value }</td>
                <td>{this.getCurrencyName(exchangeRates, currency)}</td>
                <td>{ parseFloat(this.getQuote(exchangeRates, currency)).toFixed(2) }</td>
                <td>
                  { parseFloat(
                    Math.fround(value * this.getQuote(exchangeRates, currency)),
                  ).toFixed(2)}
                </td>
                <td>Real</td>
                <td>
                  <section>
                    <TableButton click={ () => expenseDelete(id) } />
                  </section>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    );
  }
}

DataTable.propTypes = {
  toRecoverExpenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  expenseDelete: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  toRecoverExpenses: state.wallet.expenses,
});
const mapDispatchToProps = (dispatch) => ({
  expenseDelete: (id) => dispatch(deleteExpense(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DataTable);
