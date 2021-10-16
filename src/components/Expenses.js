import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SelectCurrency from './SelectCurrency';
import './Expenses.css';
import { saveExpenses } from '../actions';

class Expenses extends React.Component {
  constructor() {
    super();
    this.state = ({
      id: 1,
      value: 0,
      description: '',
      currency: 'USD',
      method: '',
      tag: '',
    });

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  async handleSubmit() {
    const { saveExpenseData } = this.props;
    saveExpenseData(this.state);
    const { id } = this.state;
    this.setState({ id: id + 1 });
  }

  render() {
    const { value, description } = this.state;
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input
            id="value"
            type="number"
            name="value"
            min="0"
            value={ value }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            id="description"
            type="text"
            name="description"
            value={ description }
            onChange={ this.handleChange }
          />
        </label>
        <SelectCurrency id="select-currency-expense" handleChange={ this.handleChange } />
        <label htmlFor="payment-method">
          Método de Pagamento:
          <select id="payment-method" name="method" onChange={ this.handleChange }>
            <option>Selecione</option>
            <option value="money">Dinheiro</option>
            <option value="credit-card">Cartão de Crédito</option>
            <option value="debit-card">Cartão de Débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select id="tag" name="tag" onChange={ this.handleChange }>
            <option>Selecione</option>
            <option value="food">Alimentação</option>
            <option value="leisure">Lazer</option>
            <option value="work">Trabalho</option>
            <option value="commute">Transporte</option>
            <option value="health">Saúde</option>
          </select>
        </label>
        <button type="button" onClick={ this.handleSubmit }>Adicionar despesa</button>
      </form>
    );
  }
}

Expenses.propTypes = {
  saveExpenseData: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  saveExpenseData: (values) => dispatch(saveExpenses(values)),
});

export default connect(null, mapDispatchToProps)(Expenses);
