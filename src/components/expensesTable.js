import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function ExpensesTable(props) {
  const { expenses } = props;
  return (
    <table className="table table-hover">
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
        { expenses.map((expense) => {
          const currency = expense.exchangeRates[expense.currency];
          const currencyName = currency.name.split('/');
          const numberValue = Number(expense.value);
          const ask = Number(currency.ask);
          return (
            <tr key={ expense.id }>
              <td>{ expense.description }</td>
              <td>{ expense.tag }</td>
              <td>{ expense.method }</td>
              <td>{ expense.value }</td>
              <td>{ currencyName[0] }</td>
              <td>{ ask.toFixed(2) }</td>
              <td>{ (numberValue * ask).toFixed(2) }</td>
              <td>Real</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

ExpensesTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(ExpensesTable);
