import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrency, submitExpense } from '../actions';

class AddDespesa extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.descricao = this.descricao.bind(this);
    this.currencyOptions = this.currencyOptions.bind(this);
    this.requestCurrency = this.requestCurrency.bind(this);
    this.state = {
      valor: '',
      moeda: 'USD',
      pagamento: 'Cartão de crédito',
      tag: 'Lazer',
      descricao: '',
      currencies: [],
    };
  }

  componentDidMount() {
    this.requestCurrency();
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  async handleClick() {
    const { submit, updateTotal, total, expenses } = this.props;
    const { valor, moeda, pagamento, tag, descricao } = this.state;
    await this.requestCurrency();
    const { exchangeRates } = this.state;
    const id = expenses.length;
    const expense = {
      id,
      value: valor,
      description: descricao,
      currency: moeda,
      method: pagamento,
      tag,
      exchangeRates,
    };
    submit(expense);
    this.setState({
      valor: '',
      moeda: 'USD',
      pagamento: 'Cartão de crédito',
      tag: 'Lazer',
      descricao: '',
    });
    const updateValue = total + ((+valor) * exchangeRates[moeda].ask);
    updateTotal(updateValue);
  }

  async requestCurrency() {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const currencyData = await response.json();
    const keys = Object.keys(currencyData);
    const filteredCurrencies = keys.filter((currency) => currency !== 'USDT');
    this.setState({
      currencies: filteredCurrencies,
      exchangeRates: currencyData,
    });
  }

  currencyOptions() {
    const { currencies } = this.state;
    return currencies.map((currency, index) => (
      <option key={ index }>{ currency }</option>
    ));
  }

  descricao() {
    const { descricao } = this.state;
    return (
      <label htmlFor="descricao">
        Descrição
        <input
          type="text"
          name="descricao"
          id="descricao"
          onChange={ this.handleChange }
          value={ descricao }
        />
      </label>
    );
  }

  render() {
    const { valor, moeda, pagamento, tag } = this.state;
    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input
            type="text"
            id="valor"
            name="valor"
            onChange={ this.handleChange }
            value={ valor }
          />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select id="moeda" name="moeda" onChange={ this.handleChange } value={ moeda }>
            { this.currencyOptions() }
          </select>
        </label>
        <label htmlFor="pagamento">
          Método de pagamento
          <select
            name="pagamento"
            id="pagamento"
            onChange={ this.handleChange }
            value={ pagamento }
          >
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
            <option>Dinheiro</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select name="tag" id="tag" onChange={ this.handleChange } value={ tag }>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Alimentação</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        { this.descricao() }
        <button type="button" onClick={ this.handleClick }>Adicionar despesa</button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    exchangeRates: state.wallet.currencies,
    expenses: state.wallet.expenses,
  };
}

const mapDispatchToProps = (dispatch) => ({
  getCurrency: () => dispatch(fetchCurrency()),
  submit: (expense) => dispatch(submitExpense(expense)),
});

AddDespesa.propTypes = {
  submit: PropTypes.func.isRequired,
  updateTotal: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddDespesa);
