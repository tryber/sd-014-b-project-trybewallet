import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HeadersTable from './HeadersTable';

class Table extends Component {
  constructor() {
    super();

    this.convertingCurrency = this.convertingCurrency.bind(this);
    this.state = {
      currencyConverted: 0,
      exchange: 'Real',
    };
  }

  componentDidMount() {
    this.convertingCurrency();
  }

  convertingCurrency() {
    const { expense: { currency, exchangeRates } } = this.props;
    const coinSelected = exchangeRates[currency];
    const coinName = coinSelected.name.split('/')[0];
    const coinAsk = Number(coinSelected.ask).toFixed(2);
    this.setState({ currencyConverted: coinAsk, exchange: coinName });
  }

  render() {
    const { props: { expense }, state: { currencyConverted, exchange } } = this;
    const { value, description, method, currency, tag } = expense;
    return (
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <HeadersTable />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {value}
              </td>
              <td>
                {description}
              </td>
              <td>
                {currency}
              </td>
              <td>
                {method}
              </td>
              <td>
                {tag}
              </td>
              <td>
                { exchange }
              </td>
              <td>
                { currencyConverted }
              </td>
              <td>
                BRL
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

Table.propTypes = {
  expense: PropTypes.shape({
    currency: PropTypes.string.isRequired,
    description: PropTypes.string,
    method: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    exchangeRates: PropTypes.shape({}).isRequired,
  }).isRequired,
};

export default Table;
