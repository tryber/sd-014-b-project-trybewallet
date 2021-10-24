import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class ExpensesTable extends React.Component {
  render() {
    const { expensesList } = this.props;
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
          {expensesList.map((expense, index) => {
            const currency = expense.exchangeRates[expense.currency];
            return (
              <tr key={ index }>
                <td>{ expense.description }</td>
                <td>{ expense.tag }</td>
                <td>{ expense.method }</td>
                <td>{ expense.value }</td>
                <td>{ currency.name.split('/')[0] }</td>
                <td>{ Number(currency.ask).toFixed(2) }</td>
                <td>{ (expense.value * currency.ask).toFixed(2) }</td>
                <td>Real</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expensesList: state.wallet.expenses,
});

ExpensesTable.propTypes = {
  expensesList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default connect(mapStateToProps)(ExpensesTable);

// https://www.w3schools.com/jsref/jsref_number.asp
