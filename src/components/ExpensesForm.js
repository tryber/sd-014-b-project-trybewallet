import React from 'react';
import { connect } from 'react-redux';
import Input from './Input';
import SelectInput from './SelectInput';
import fetchCurrencies from '../services';

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
      formData: {
        currencyValue: '',
        description: '',
        currency: '',
        paymentMethod: paymentMethods[0],
        tag: tags[0],
      },
    };
    this.filterAPIData = this.filterAPIData.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const dataParsers = [this.filterAPIData];
    fetchCurrencies(dataParsers).then(
      (data) => this.setState(() => {
        const { formData } = this.state;
        const newCurrencies = Object.keys(data);

        return {
          currencies: newCurrencies,
          formData: {
            ...formData,
            currency: newCurrencies[0],
          },
        };
      }),
    );
  }

  handleChange({ target: { name, value } }) {
    const { formData } = this.state;
    this.setState({ formData: { ...formData, [name]: value } });
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
    const { currencies, formData } = this.state;
    const { currencyValue, description, currency, paymentMethod, tag } = formData;

    return (
      <form>
        <Input
          label="Valor"
          name="currencyValue"
          value={ currencyValue }
          onChange={ this.handleChange }
        />
        <Input
          label="Descrição"
          name="description"
          value={ description }
          onChange={ this.handleChange }
        />
        <SelectInput
          label="Moeda"
          name="currency"
          value={ currency }
          options={ currencies }
          onChange={ this.handleChange }
        />
        <SelectInput
          label="Método de pagamento"
          name="paymentMethod"
          value={ paymentMethod }
          options={ paymentMethods }
          onChange={ this.handleChange }
        />
        <SelectInput
          label="Tag"
          name="tag"
          value={ tag }
          options={ tags }
          onChange={ this.handleChange }
        />
      </form>
    );
  }
}

export default connect(null, null)(ExpensesForm);
