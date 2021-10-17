import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getConversion } from '../actions';
import DATA from '../data';

class ExpensesTable extends Component {
  getCambio = (obj, value) => Object.entries(obj).find((item) => item[0] === value)[1];

  render() {
    const { expenses } = this.props;
    return (
      <table>
        <thead>
          <tr>
            { DATA.tableHeader
              .map((item) => <th key={ item } scope="header">{ item }</th>) }
          </tr>
        </thead>
        <tbody>
          { expenses.map((item, ind) => {
            const { value, description, currency, method, tag, exchangeRates } = item;
            const rate = +(this.getCambio(exchangeRates, currency).ask);
            return (
              <tr key={ `tr${ind}` }>
                <td>{ description }</td>
                <td>{ tag }</td>
                <td>{ method }</td>
                <td>{ value }</td>
                <td>
                  { this.getCambio(exchangeRates, currency).name.match(/[^/]+/gi)[0] }
                </td>
                <td>{ rate.toFixed(2) }</td>
                <td>{ getConversion(expenses)[ind].toFixed(2) }</td>
                <td>Real</td>
                <td><button type="button">X</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

ExpensesTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
};

const mapState = ({ wallet: { expenses } }) => ({ expenses });

export default connect(mapState)(ExpensesTable);
