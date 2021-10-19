import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Table.css';
import HeadTable from './HeadTable';
import { deleteItem } from '../actions';

class Table extends React.Component {
  deleteItem = (id) => {
    const { purchases, removeItem } = this.props;
    const newArray = purchases.filter((purchase) => purchase.id !== id);
    removeItem(newArray);
  };

  render() {
    const { purchases } = this.props;
    let arrayPurchase = false;
    if (purchases.length !== 0) arrayPurchase = true;
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
              <input
                type="button"
                className="editButton"
                data-testid="edit-btn"
              />
              <input
                type="button"
                className="deleteButton"
                data-testid="delete-btn"
                onClick={ () => this.deleteItem(purchase.id) }
              />
            </td>
          </tr>
        );
      }));
    return (
      <table>
        <thead>
          <HeadTable />
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
  removeItem: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  purchases: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  removeItem: (array) => dispatch(deleteItem(array)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
