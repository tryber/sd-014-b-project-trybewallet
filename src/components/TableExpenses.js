import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class TableExpenses extends React.Component {
  render() {
    const { walletExpenses } = this.props;
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

        {walletExpenses.map((expense) => (
          <tbody key={ expense.id }>
            <td>{ expense.description }</td>
            <td>{ expense.tag }</td>
            <td>{ expense.method }</td>
            <td>{ expense.value }</td>
            <td>
              {expense.exchangeRates[expense.currency]
                .name}
            </td>
            <td>
              { parseFloat(expense.exchangeRates[expense.currency].ask).toFixed(2) }
            </td>
            <td>
              { (parseFloat(expense.value)
                * parseFloat(expense.exchangeRates[expense.currency].ask)).toFixed(2) }
            </td>
            <td>Real</td>
          </tbody>))}
      </table>
    );
  }
}

TableExpenses.propTypes = {
  walletExpenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  walletExpenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(TableExpenses);
