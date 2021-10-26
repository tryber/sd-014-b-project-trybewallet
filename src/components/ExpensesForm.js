import React from 'react';
import { connect } from 'react-redux';
import fetchCurrencies from '../services';
import generateSelectOptionsFromArray from '../utils/forms/generation';

const paymentMethods = [
  'Dinheiro',
  'Cartão de crédito',
  'Cartão de débito',
];
const tags = [
  'Alimentação',
  'Lazer',
  'Trabalho',
  'Transporte',
  'Saúde',
];

class ExpensesForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currencies: [],
    };
    this.filterAPIData = this.filterAPIData.bind(this);
  }

  componentDidMount() {
    const dataParsers = [this.filterAPIData];
    fetchCurrencies(dataParsers).then(
      (data) => this.setState({ currencies: Object.keys(data) }),
    );
  }

  filterAPIData(data) {
    const finalFilteredData = Object.entries(data).reduce(
      (
        filteredData,
        [currencyName, currencyData],
      ) => (
        currencyName !== 'USDT'
          ? { ...filteredData, [currencyName]: { ...currencyData } }
          : filteredData
      ),
      {},
    );

    return finalFilteredData;
  }

  render() {
    const { currencies } = this.state;

    return (
      <form>
        <label htmlFor="value">
          {'Valor: '}
          <input type="text" name="value" id="value" />
          {' '}
        </label>
        <label htmlFor="description">
          {'Descrição: '}
          <input type="text" name="description" id="description" />
          {' '}
        </label>
        <label htmlFor="currency">
          {'Moeda: '}
          <select id="currency">
            { generateSelectOptionsFromArray(currencies) }
          </select>
          {' '}
        </label>
        <label htmlFor="paymentMethod">
          {'Método de pagamento: '}
          <select id="paymentMethod">
            { generateSelectOptionsFromArray(paymentMethods) }
          </select>
          {' '}
        </label>
        <label htmlFor="tag">
          {'Tag: '}
          <select id="tag">
            { generateSelectOptionsFromArray(tags) }
          </select>
          {' '}
        </label>
      </form>
    );
  }
}

export default connect(null, null)(ExpensesForm);
