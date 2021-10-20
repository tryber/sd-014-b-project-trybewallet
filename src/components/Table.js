import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class Table extends React.Component {
  render() {
    const { totalExpenses } = this.props;
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
        { totalExpenses.map((expense, k) => (
          <tr key={ k }>
            <td>{ expense.description }</td>
            <td>{ expense.tag }</td>
            <td>{ expense.method }</td>
            <td>{ parseFloat(expense.value).toFixed(2) }</td>
            <td>{ (expense.exchangeRates[expense.currency].name) }</td>
            <td>{ parseFloat(expense.exchangeRates[expense.currency].ask) }</td>
            <td>
              {
                (parseFloat(expense.value).toFixed(2)
                * parseFloat(expense.exchangeRates[expense.currency].ask))
                  .toFixed(2)
              }
            </td>
            <td>Real</td>
            <td>Botão Editar/Excluir</td>
          </tr>
        )) }
      </table>
    );
  }
}

Table.propTypes = {
  totalExpenses: PropTypes.shape({
    map: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  totalExpenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Table);
