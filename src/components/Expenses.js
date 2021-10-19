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
      id: 0,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: '',
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
    const { id } = this.state;
    const urlAPI = 'https://economia.awesomeapi.com.br/json/all';
    const getData = await fetch(urlAPI)
      .then((response) => response.json())
      .catch((error) => new Error(error));
    this.setState({
      exchangeRates: getData,
    });
    const { saveExpenseData } = this.props;
    saveExpenseData(this.state);
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
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de Crédito</option>
            <option value="Cartão de débito">Cartão de Débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select id="tag" name="tag" onChange={ this.handleChange }>
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
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
