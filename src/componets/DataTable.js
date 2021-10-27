import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class DataTable extends React.Component {
  render() {
    const { purchases } = this.props;
    let setItensArray = false;
    setItensArray = purchases.length !== 0;

    const renderPurchase = (
      purchases.map((purchase) => {
        const currency = purchase.exchangeRates[purchase.currency].name;
        const currencyPurchase = currency.split('/');
        const exchangeRate = purchase.exchangeRates[purchase.currency].ask;
        const convertedValue = purchase.value * exchangeRate;
        return (
          <tr key={ purchase.id }>
            <td>{ purchase.description }</td>
            <td>{ purchase.tag }</td>
            <td>{ purchase.method }</td>
            <td>{ parseFloat(purchase.value) }</td>
            <td>{ currencyPurchase[0] }</td>
            <td>{ parseFloat(exchangeRate).toFixed(2) }</td>
            <td>{ convertedValue.toFixed(2) }</td>
            <td>Real</td>
            <td>
              <button type="button" data-testid="edit-btn">edita</button>
              <button type="button" data-testid="delete-btn" onClick="">apaga</button>
            </td>
          </tr>
        );
      })
    );
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
          {setItensArray && renderPurchase}
        </thead>
      </table>
    );
  }
}

DataTable.propTypes = {
  purchases: PropTypes.arrayOf(
    PropTypes.shape.isRequired,
  ).isRequired,
};

const mapStateToProps = (state) => ({
  purchases: state.wallet.expenses,
});

export default connect(mapStateToProps)(DataTable);
