import React from 'react';
import Input from '../interactionComponents/input';
import TextArea from '../interactionComponents/textArea';
import { paymentMethodData, tagData } from '../data/ExpensesFormData';

class ExpensesForm extends React.Component {
  constructor() {
    super();

    this.state = {
      value: 0,
      currencies: [],
      expenses: [],
      paymentMethod: '',
      tag: '',
      description: '',

    };

    this.handleChange = this.handleChange.bind(this);
    this.handleTypeSelect = this.handleTypeSelect.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleTypeSelect(e) {
    this.setState({ paymentMethod: e.target.value });
}

  render() {
    const { currencies, expenses, paymentMethod, tag, description, value } = this.state;
    return (
      <form>
        <Input
          label="Valor"
          className="Input-value"
          type="number"
          name="value"
          data-testid="email-input"
          value={ value }
          onChange={ this.handleChange }
        />
        <TextArea
          label="Descrição"
          value={ description }
          name="description"
          maxLength="100"
          onChange={ this.handleChange }
          required
        />
        {/* <select
              label="Moedas"
              name={ field }
            >
              {FBButtons.map((fbb) => <option key={ fbb.key } value={ fbb.key }>{fbb.value}</option>)}
              ;
            </select> */}

        <label htmlFor={ paymentMethod }>
          Método de pagamento:
          <select id={ paymentMethod } value={ this.state.value } onChange={ this.handleTypeSelect }>
            {paymentMethodData.map((item) => (
              <option key={ item } value={ item }>{ item }</option>))}
          </select>
        </label>

        <label htmlFor={ tag }>
          Tag:
          <select id={ tag } value={ tag } onChange={ this.handleTypeSelect }>
            {tagData.map((item) => (
              <option key={ item } value={ item }>{ item }</option>))}
          </select>
        </label>

      </form>

    );
  }
}

export default ExpensesForm;
