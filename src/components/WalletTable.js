import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class WalletTable extends React.Component {
  render() {
    const { expenses } = this.props;
    let addToTable = false;
    addToTable = expenses.length !== 0;

    const renderExpensesToTable = (
      expenses.map((purchase) => {
        const currency = purchase.exchangeRates[purchase.currency].name;
        const currencyName = currency.split('/');
        const exchangeRate = purchase.exchangeRates[purchase.currency].ask;
        const convertedValue = purchase.value * exchangeRate;
        return (
          <tr key={ purchase.id }>
            <td>{ purchase.description }</td>
            <td>{ purchase.tag }</td>
            <td>{ purchase.method }</td>
            <td>{ parseFloat(purchase.value) }</td>
            <td>{ currencyName[0] }</td>
            <td>{ parseFloat(exchangeRate).toFixed(2) }</td>
            <td>{ convertedValue.toFixed(2) }</td>
            <td>Real</td>
            <td>
              <button type="button" data-testid="edit-btn">Editar</button>
              <button type="button" data-testid="delete-btn" onClick="">Apagar</button>
            </td>
          </tr>
        );
      })
    );
    return (
      <div>
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
            {addToTable && renderExpensesToTable}
          </thead>
        </table>
      </div>
    );
  }
}

WalletTable.propTypes = {
  expenses: PropTypes.arrayOf(
    PropTypes.shape.isRequired,
  ).isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(WalletTable);
