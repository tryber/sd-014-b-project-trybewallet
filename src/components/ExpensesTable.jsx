import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class ExpenseTable extends React.Component {
  render() {
    const { expenses } = this.props;
    return (
      <table>
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
        <tr>
          { expenses.map((eachExpense) => (
            <>
              <td key={ eachExpense.id }>{eachExpense.description}</td>
              <td key={ eachExpense.id }>{eachExpense.tag}</td>
              <td key={ eachExpense.id }>{eachExpense.method}</td>
              <td key={ eachExpense.id }>{eachExpense.value}</td>
              <td key={ eachExpense.id }>
                {eachExpense
                  .exchangeRates[eachExpense.currency].name.split('/')[0]}
              </td>
              <td key={ eachExpense.id }>
                {Number(eachExpense
                  .exchangeRates[eachExpense.currency].ask).toFixed(2) }
              </td>
              <td key={ eachExpense.id }>
                { Number(eachExpense
                  .exchangeRates[eachExpense.currency]
                  .ask * eachExpense.value).toFixed(2) }
              </td>
              <td key={ eachExpense.id }>Real Brasileiro</td>
              <td key={ eachExpense.id }>
                <button type="button">Editar</button>
                <button type="button">Excluir</button>
              </td>
            </>
          ))}
        </tr>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

ExpenseTable.propTypes = {
  expenses: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(ExpenseTable);
