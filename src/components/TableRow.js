import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TableRow extends Component {
  render() {
    const {
      expenseObj: { description, tag, method, value, currency, exchangeRates },
    } = this.props;
    return (
      <tr>
        <td>{description}</td>
        <td>{tag}</td>
        <td>{method}</td>
        <td>{Number.isInteger(+value) ? value : (+value).toFixed(2)}</td>
        <td>{exchangeRates[currency].name.split('/')[0]}</td>
        <td>{Number(exchangeRates[currency].ask).toFixed(2)}</td>
        <td>{ Number(value * exchangeRates[currency].ask).toFixed(2)}</td>
        <td>Real</td>
        <td>
          <button id="delete-btn" type="button">Delete</button>
          <button id="edit-btn" type="button">Edit</button>
        </td>
      </tr>
    );
  }
}

TableRow.propTypes = {
  expenseObj: PropTypes.shape({
    description: PropTypes.string,
    tag: PropTypes.string,
    method: PropTypes.string,
    value: PropTypes.string,
    currency: PropTypes.string,
    exchangeRates: PropTypes.objectOf(PropTypes.object),
  }).isRequired,
};
