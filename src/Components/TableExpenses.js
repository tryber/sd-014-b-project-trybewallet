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
        const valueCoins = parseFloat(value);
        return (
          <tr key={ id }>
            <td>{ description }</td>
            <td>{ tag }</td>
            <td>{ method }</td>
            <td>{ valueCoins }</td>
            <td>{ currency }</td>
            <td>{ exchangeRates.ask }</td>
            <td>{ (value * exchangeRates[currency].ask) }</td>
            <td>Real Brasileiro</td>
            <td>
              <Button
                text="Edit"
                onClick={ () => {} }
              />
              <Button
                text="Trash"
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
