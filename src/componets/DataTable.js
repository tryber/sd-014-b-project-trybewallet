import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { delPurchase } from '../actions';
import HeadTable from './HeadTable';

class DataTable extends React.Component {
  handleClick(id) {
    const { purchases, delItem } = this.props;
    const item = purchases.filter((purchase) => purchase.id !== id);
    delItem(item);
  }

  render() {
    const { purchases } = this.props;
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
              <button
                type="button"
                data-testid="delete-btn"
                onClick={ () => this.handleClick(purchase.id) }
              >
                apaga
              </button>
            </td>
          </tr>
        );
      })
    );
    return (
      <HeadTable renderPurchase={ renderPurchase } />
    );
  }
}

DataTable.propTypes = {
  purchases: PropTypes.arrayOf(
    PropTypes.shape.isRequired,
  ).isRequired,
  delItem: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  purchases: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  delItem: (array) => dispatch(delPurchase(array)),
});
// Com apoio do Michael Caxias e Lucas Accurcio
export default connect(mapStateToProps, mapDispatchToProps)(DataTable);
