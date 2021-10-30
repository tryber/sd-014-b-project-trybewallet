import PropTypes from 'prop-types';
import React, { Component } from 'react';
import InputDefault from './InputDefault';
import SelectDefault from './SelectDefault';
import { fetchCurrenciesList } from '../services/currencyQuotesApi';

export default class ExpenseForm extends Component {
  constructor(props) {
    super(props);

    const { values: { value, description, currency, method, tag } } = props;
    this.state = {
      value,
      description,
      currency,
      method,
      tag,
      currencies: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.getCurrenciesList = this.getCurrenciesList.bind(this);
  }

  componentDidMount() {
    this.getCurrenciesList();
  }

  async getCurrenciesList() {
    const currencies = await fetchCurrenciesList();
    this.setState({ currencies });
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { onSubmit, isEditing } = this.props;
    const { currencies, value, description, method, tag, currency } = this.state;
    return (
      <form>
        <InputDefault
          name="value"
          onChange={ this.handleChange }
          value={ value }
          label="Valor"
        />
        <InputDefault
          name="description"
          onChange={ this.handleChange }
          value={ description }
          label="Descrição"
        />
        <SelectDefault
          name="currency"
          options={ currencies }
          onChange={ this.handleChange }
          value={ currency }
          label="Moeda"
        />
        <SelectDefault
          name="method"
          options={ ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'] }
          onChange={ this.handleChange }
          value={ method }
          label="Método de pagamento"
        />
        <SelectDefault
          name="tag"
          options={ ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'] }
          onChange={ this.handleChange }
          value={ tag }
          label="Tag"
        />
        <button
          type="submit"
          onClick={ (event) => {
            event.preventDefault();
            onSubmit({ value, description, currency, method, tag });
          } }
        >
          { isEditing ? 'Editar Gasto' : 'Adicionar Despesa' }
        </button>
      </form>
    );
  }
}

ExpenseForm.propTypes = {
  values: PropTypes.shape({
    currencies: PropTypes.arrayOf(PropTypes.string),
    value: PropTypes.string,
    description: PropTypes.string,
    currency: PropTypes.string,
    method: PropTypes.string,
    tag: PropTypes.string,
  }),
  onSubmit: PropTypes.func.isRequired,
  isEditing: PropTypes.bool,
};

ExpenseForm.defaultProps = {
  isEditing: false,
  values: {
    value: '',
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
    currencies: [],
  },
};
