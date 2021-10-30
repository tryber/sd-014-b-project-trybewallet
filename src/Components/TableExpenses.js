import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Button from './Button';
import HeaderTable from './HeaderTable';

import './table.css';

class TableExpenses extends Component {
  constructor() {
    super();

    this.mapExpenses = this.mapExpenses.bind(this);
  }

  mapExpenses() {
    const { arrayExpenses } = this.props;
    const renderExpenses = arrayExpenses
      .map(({ id, value, description, tag, method, currency, exchangeRates }) => {
        const exchangeUsed = exchangeRates[currency].name.split('/');
        const finalValue = value * exchangeRates[currency].ask;
        const formatedValue = finalValue.toFixed(2);
        // .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        const formatedCoins = exchangeRates[currency].ask;
        const valueCoins = parseFloat(formatedCoins).toFixed(2);
        return (
          <tr key={ id }>
            <td>{ description }</td>
            <td>{ tag }</td>
            <td>{ method }</td>
            <td>{ `${currency} ${value}` }</td>
            <td>{ exchangeUsed[0] }</td>
            <td>{ valueCoins }</td>
            <td>{ formatedValue }</td>
            <td>{ exchangeUsed[1] }</td>
            <td>
              <Button
                text="Edit"
                data-testid="edit-btn"
                onClick={ () => {} }
              />
              /
              <Button
                text="Trash"
                data-testid="delete-btn"
                onClick={ () => {} }
              />
            </td>
          </tr>);
      });
    return renderExpenses;
  }

  render() {
    return (
      <table>
        <HeaderTable />
        <tbody>
          { this.mapExpenses() }
        </tbody>
      </table>
    );
  }
}

TableExpenses.propTypes = {
  arrayExpenses: PropTypes.shape({ map: PropTypes.func }).isRequired,
};

const mapStateToProps = (state) => ({
  arrayExpenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(TableExpenses);
