import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Table.css';

class Table extends React.Component {
  render() {
    const { purchases } = this.props;
    let arrayPurchase = false;

    if (purchases.length !== 0) {
      arrayPurchase = true;
    }

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
          </tr>
        );
      })
    );

    console.log(purchases);
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
          {arrayPurchase && renderPurchase}
        </thead>
      </table>
    );
  }
}

Table.propTypes = {
  purchases: PropTypes.arrayOf(PropTypes.shape({
    map: PropTypes.func,
  })).isRequired,
};

const mapStateToProps = (state) => ({
  purchases: state.wallet.expenses,
});

export default connect(mapStateToProps)(Table);
