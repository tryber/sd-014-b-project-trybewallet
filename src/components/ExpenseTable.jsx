import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const title = [
  'Descrição',
  'Tag',
  'Método de pagamento',
  'Valor',
  'Moeda',
  'Câmbio utilizado',
  'Valor convertido',
  'Moeda de conversão',
  'Editar/Excluir'];

function ExpenseTable(props) {
  const { expenses } = props;
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          { title.map((element, index) => <th key={ index + 1 }>{ element }</th>)}
        </tr>
      </thead>
      <tbody>
        { expenses.length > 0 && expenses.map((expense) => {
          const currentCurrency = expense.exchangeRates[expense.currency];
          const nameCurrency = currentCurrency.name.split('/');
          const valueToNumber = Number(expense.value);
          const currentAsk = Number(currentCurrency.ask);
          return (
            <tr key={ expense.id }>
              <td>{ expense.description }</td>
              <td>{ expense.tag }</td>
              <td>{ expense.method }</td>
              <td>{ expense.value }</td>
              <td>{ nameCurrency[0] }</td>
              <td>{ currentAsk.toFixed(2) }</td>
              <td>{ (valueToNumber * currentAsk).toFixed(2) }</td>
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

ExpenseTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(ExpenseTable);
