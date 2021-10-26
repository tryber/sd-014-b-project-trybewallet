import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Input from './Input';
import SelectInput from './SelectInput';
import fetchCurrencies from '../services';
import { addExpense } from '../actions';

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
        value: '',
        description: '',
        currency: '',
        method: paymentMethods[0],
        tag: tags[0],
      },
    };
    this.filterAPIData = this.filterAPIData.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const dataParsers = [this.filterAPIData];
    fetchCurrencies(dataParsers).then(
      (data) => this.setState(() => {
        const { formData } = this.state;
        const currenciesNames = Object.keys(data);

        return {
          currencies: currenciesNames,
          formData: {
            ...formData,
            currency: currenciesNames[0],
          },
        };
      }),
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

  handleChange({ target: { name, value } }) {
    const { formData } = this.state;
    this.setState({ formData: { ...formData, [name]: value } });
  }

  handleSubmit(event) {
    const { dispatchAddExpense } = this.props;
    const { formData } = this.state;

    event.preventDefault();
    dispatchAddExpense(formData);
  }

  render() {
    const { currencies, formData } = this.state;
    const { value, description, currency, method, tag } = formData;

    return (
      <form onSubmit={ this.handleSubmit }>
        <Input
          label="Valor"
          name="value"
          value={ value }
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
          name="method"
          value={ method }
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
        <button type="submit">Adicionar despesa</button>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatchAddExpense: (payload) => dispatch(addExpense(payload)),
  };
}

export default connect(null, mapDispatchToProps)(ExpensesForm);

ExpensesForm.propTypes = {
  dispatchAddExpense: PropTypes.func.isRequired,
};
