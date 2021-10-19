import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import editIcon from '../images/icons8-edit-row-64.png';
import deleteIcon from '../images/icons8-delete-row-64.png';
import './Table.css';
import HeadTable from './HeadTable';

class Table extends React.Component {
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
            <img className="imageButton" src={ editIcon } alt="editar" />
            <img
              className="imageButton"
              data-testid="delete-btn"
              src={ deleteIcon }
              alt="deletar"
            />
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
};

const mapStateToProps = (state) => ({
  purchases: state.wallet.expenses,
});

export default connect(mapStateToProps)(Table);
