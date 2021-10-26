import React from 'react';
import { connect } from 'react-redux';

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

class ExpenseForm extends React.Component {
  render() {
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
            <option>BRL</option>
          </select>
          {' '}
        </label>
        <label htmlFor="paymentMethod">
          {'Método de pagamento: '}
          <select id="paymentMethod">
            {
              paymentMethods.map(
                (paymentMethod, index) => <option key={ index }>{paymentMethod}</option>,
              )
            }
          </select>
          {' '}
        </label>
        <label htmlFor="tag">
          {'Tag: '}
          <select id="tag">
            {
              tags.map(
                (tag, index) => <option key={ index }>{tag}</option>,
              )
            }
          </select>
          {' '}
        </label>
      </form>
    );
  }
}

export default connect(null, null)(ExpenseForm);
