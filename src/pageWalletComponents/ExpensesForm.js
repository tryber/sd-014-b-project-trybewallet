import React from 'react';
import Input from '../interactionComponents/input';
import TextArea from '../interactionComponents/textArea';
import { paymentMethodData, tagData } from '../data/ExpensesFormData';
import SelectLabel from '../interactionComponents/select';

class ExpensesForm extends React.Component {
  constructor() {
    super();

    this.state = {
      expenses: [{
        id: [],
        value: 0,
        description: '',
        currency: '',
        method: '',
        tag: '',
        exchangeRates: [],
      }],
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { currency, expenses, method, tag, description, value } = this.state;
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

        <SelectLabel
          id="method"
          value={ method }
          name="Método de pagamento"
          callbackFunc={ this.handleChange }
          data={ paymentMethodData }
        />

        <SelectLabel
          id="tag"
          value={ tag }
          name="tag"
          callbackFunc={ this.handleChange }
          data={ tagData }
        />

      </form>

    );
  }
}

export default ExpensesForm;
