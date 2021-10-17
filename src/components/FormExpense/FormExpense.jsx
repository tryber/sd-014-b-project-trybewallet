import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { exchangeRating, setCurrencies } from '../../actions';
import Input from '../Input';
import Select from '../Select';
import './FormExpense.css';
import Button from '../Button';

const paymentOptions = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const expenseOptions = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
const URL = 'https://economia.awesomeapi.com.br/json/all';

class FormExpense extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
    this.fetchCurrency = this.fetchCurrency.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.renderSelect = this.renderSelect.bind(this);
  }

  componentDidMount() {
    this.fetchCurrency();
  }

  async handleClick() {
    const {
      value,
      description,
      currency,
      id,
      method,
      tag,
    } = this.state;
    const { setExpenses } = this.props;
    const getApi = await fetch(URL);
    const exchangeRates = await getApi.json();
    this.setState((prev) => ({ id: prev.id + 1 }));
    const addExpense = {
      value, description, id, exchangeRates, currency, method, tag,
    };
    setExpenses(addExpense);
  }

  handleEdit() {
    // implementar logica
  }

  handleChange({ target: { id, value } }) {
    this.setState({ [id]: value });
  }

  async fetchCurrency() {
    const { setCurrency } = this.props;
    const getApi = await fetch(URL);
    const response = await getApi.json();
    const coins = Object.keys(response).filter((currency) => currency !== 'USDT');
    setCurrency(coins);
  }

  renderSelect() {
    const {
      currency,
      method,
      tag,
    } = this.state;
    const { currencies } = this.props;
    return (
      <>
        <Select
          id="currency"
          label="Moeda:"
          array={ currencies }
          value={ currency }
          onChange={ this.handleChange }
        />
        <Select
          id="method"
          label="Método de pagamento:"
          array={ paymentOptions }
          value={ method }
          onChange={ this.handleChange }
        />
        <Select
          id="tag"
          label="Tag:"
          array={ expenseOptions }
          value={ tag }
          onChange={ this.handleChange }
        />
      </>
    );
  }

  render() {
    const {
      value,
      description,
    } = this.state;
    const { isEditing } = this.props;
    return (
      <form className="form-expense">
        <Input
          inputValue={ value }
          onChange={ this.handleChange }
          label="Valor:"
          type="number"
          id="value"
        />
        <Input
          inputValue={ description }
          onChange={ this.handleChange }
          label="Descrição:"
          id="description"
        />
        { this.renderSelect() }
        {!isEditing
          ? <Button onClick={ this.handleClick }>Adicionar despesa</Button>
          : <Button onClick={ this.handleEdit }>Editar despesa</Button>}
      </form>

    );
  }
}

FormExpense.propTypes = {
  setExpenses: PropTypes.func.isRequired,
  setCurrency: PropTypes.func.isRequired,
  isEditing: PropTypes.bool.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  wallet: PropTypes.shape({
    length: PropTypes.number,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setExpenses: (rates) => dispatch(exchangeRating(rates)),
  setCurrency: (currencies) => dispatch(setCurrencies(currencies)),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  isEditing: state.wallet.isEditing,
});

export default connect(mapStateToProps, mapDispatchToProps)(FormExpense);
