import React from 'react';
import Input from './Input';
import SelectMoeda from './selects/SelectMoeda';
import SelectPay from './selects/SelectPay';
import SelectTag from './selects/SelectTag';
import Button from './Button';

class FormWallet extends React.Component {
  constructor() {
    super();
    this.state = {
      // id: '',
      value: '',
      description: '',
      currency: 'USD',
      method: 'money',
      tag: 'meal',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    return (
      <div>
        <Input
          label="Valor"
          id="valor-input"
          type="number"
          name="value"
          value={ value }
          onChange={ this.handleChange }
        />
        <Input
          label="Descrição"
          id="Descrição"
          type="text"
          name="description"
          value={ description }
          onChange={ this.handleChange }
        />
        <SelectMoeda name="currency" value={ currency } onChange={ this.handleChange } />
        <SelectPay name="method" value={ method } onChange={ this.handleChange } />
        <SelectTag name="tag" value={ tag } onChange={ this.handleChange } />
        <Button label="Adicionar despesa" />
      </div>
    );
  }
}

export default FormWallet;
