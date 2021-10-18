import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class ExpensesTable extends Component {
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
          {expenses.map((expense, index) => {
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
                {/* Observação sobre o Number() e o toFixed() */}
                {/*  no fim do código! */}
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

ExpensesTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(ExpensesTable);

// O teste não achava o 5.58. Eu imaginei que fosse problema de arredondamento,
// porque no broser mostrava tudo certo, mas a moeda de cotação tinha 4 casas depois
// da vírgula. Então usei currency.ask.toFixed(2). Mas isso dava o erro de que .ask
// não era função. Então busquei como transformar o resultado em número, e depois arredondar.
