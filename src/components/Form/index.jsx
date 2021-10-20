import React from 'react';

import payments from '../../services/payments';
import expenditures from '../../services/expenditures';

import Input from '../Input/index';
import Select from '../Select';

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      description: '',
      currency: '',
      payment: '',
      category: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { value, description, currency, payment, category } = this.state;
    return (
      <form>
        <Input
          id="input-value"
          type="number"
          label="Valor"
          name="value"
          value={ value }
          onChange={ this.handleChange }
        />
        <Input
          id="input-description"
          label="Descrição"
          name="description"
          value={ description }
          onChange={ this.handleChange }
        />
        <Select
          id="select-currency"
          label="Moeda"
          name="currency"
          defaultOption="Selecione"
          options={ ['BRL'] }
          value={ currency }
          onChange={ this.handleChange }
        />
        <Select
          id="select-payment"
          name="payment"
          label="Método de pagamento"
          options={ payments }
          defaultOption="Selecione"
          value={ payment }
          onChange={ this.handleChange }
        />
        <Select
          id="select-category"
          name="category"
          label="Tag"
          defaultOption="Selecione"
          options={ expenditures }
          value={ category }
          onChange={ this.handleChange }
        />
      </form>
    );
  }
}

export default Form;
