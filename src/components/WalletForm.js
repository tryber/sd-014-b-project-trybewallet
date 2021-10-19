import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { fetchCurrenciesAPI, fetchExpensesAPI } from '../actions';
import Input from './Inputs';

class WalletForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleClick() {
    const { exchangeRates, expenses } = this.props;
    const { value, description, currency, method, tag } = this.state;
    const expense = {
      id: expenses.length,
      value,
      description,
      currency,
      method,
      tag,
    };
    exchangeRates(expense);
  }

  renderValueInput() {
    const { value } = this.state;
    return (
      <Input
        label="Valor: "
        type="text"
        onChange={ this.handleChange }
        value={ value }
        name="value"
        id="value"
      />
    );
  }

  renderDescriptionInput() {
    const { description } = this.state;
    return (
      <Input
        label="Descrição: "
        type="text"
        onChange={ this.handleChange }
        value={ description }
        name="description"
        id="description"
      />
    );
  }

  renderForm() {
    return (
      <form>
        { this.renderValueInput() }
        { this.renderDescriptionInput() }
      </form>
    );
  }

  render() {
    const { currencies } = this.props;
    const { currency, method, tag } = this.state;
    return (
      <form>
        <span>{ this.renderForm() }</span>
        <label htmlFor="currency">
          Moeda :
          <select
            onChange={ this.handleChange }
            value={ currency }
            name="currency"
            id="currency"
          >
            {currencies
              .map((item) => (<option value={ item } key={ item }>{ item }</option>))}
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento :
          <select
            onChange={ this.handleChange }
            value={ method }
            name="method"
            id="method"
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag :
          <select
            onChange={ this.handleChange }
            value={ tag }
            name="tag"
            id="tag"
          >
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <button onClick={ this.handleClick } type="button">Adicionar Despesa</button>
      </form>
    );
  }
}

WalletForm.propTypes = {
  currencies: PropTypes.shape({
    map: PropTypes.func,
  }),
  getCurrencies: PropTypes.func,
}.isRequired;

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: (state) => dispatch(fetchCurrenciesAPI(state)),
  exchangeRates: (state) => dispatch(fetchExpensesAPI(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
