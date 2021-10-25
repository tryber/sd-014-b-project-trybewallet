import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { walletCurrenciesAction, walletExpensesAction, walletIdAction } from '../actions';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moedas: [],
      id: 0,
      value: 0,
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Lazer',
      description: '',
      exchangeRates: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleButton = this.handleButton.bind(this);
    this.handleDelet = this.handleDelet.bind(this);
    this.header = this.header.bind(this);
    this.form = this.form.bind(this);
  }

  componentDidMount() {
    this.fetchApi();
  }

  fetchApi() {
    const { handleCurrencies } = this.props;
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((json) => {
        const filtered = Object.keys(json).filter((key) => key !== 'USDT');
        handleCurrencies(filtered);
        this.setState({
          moedas: filtered,
        });
      });
  }

  async fetchExchangeRates() {
    const url = 'https://economia.awesomeapi.com.br/json/all';
    const response = await fetch(url);
    const responseJSON = await response.json();
    this.setState({
      exchangeRates: responseJSON,
    });
  }

  handleChange({ target }) {
    const { id, value } = target;
    this.setState({
      [id]: value,
    });
  }

  handleButton() {
    const { idToEdit, handleId, expenses } = this.props;
    this.setState({
      id: idToEdit,
    });
    this.fetchExchangeRates().then(() => {
      const { id, value, currency, method, tag, description, exchangeRates } = this.state;
      const expense = { id, value, currency, method, tag, description, exchangeRates };
      const target = { id: 'expense', value: expense };
      expenses.push(expense);
      this.handleChange({ target });
      handleId(id + 1);
    });
  }

  handleDelet(id) {
    const { expenses, handleExpenses } = this.props;
    const atualExpenses = expenses.filter((expense) => expense.id !== id);
    console.log(atualExpenses);
    handleExpenses(atualExpenses);
  }

  header() {
    const { email, expenses } = this.props;
    let despesaTotal = 0;
    if (expenses.length !== 0) {
      despesaTotal = expenses
        .reduce((total, expense) => {
          const { ask } = expense.exchangeRates[expense.currency];
          return total + (expense.value * ask);
        }, 0);
    }
    return (
      <section className="header__container">
        <div>
          email:
          <span data-testid="email-field">{ email }</span>
        </div>
        <div>
          Despesa total: R$
          <span data-testid="total-field">{ despesaTotal.toFixed(2) }</span>
        </div>
        <div data-testid="header-currency-field">BRL</div>
      </section>
    );
  }

  form() {
    const { moedas } = this.state;
    return (
      <form className="add__despesas__container">
        <label htmlFor="value">
          Valor:
          <input
            onChange={ this.handleChange }
            type="number"
            name="value"
            id="value"
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            onChange={ this.handleChange }
            type="text"
            name="description"
            id="description"
          />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select name="currency" id="currency" onChange={ this.handleChange }>
            { moedas.map((moeda, index) => (<option key={ index }>{ moeda }</option>)) }
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento:
          <select name="method" id="method" onChange={ this.handleChange }>
            <option value="Dinheiro" defaultValue>Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select name="tag" id="tag" onChange={ this.handleChange }>
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer" defaultValue>Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </form>
    );
  }

  table() {
    const { expenses } = this.props;
    return (
      <table border="1">
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          { expenses.map((expense, key) => {
            const ask = parseFloat(expense.exchangeRates[expense.currency].ask);
            return (
              <tr key={ key }>
                <td>{ expense.description }</td>
                <td>{ expense.tag }</td>
                <td>{ expense.method }</td>
                <td>{expense.value }</td>
                <td>{ expense.exchangeRates[expense.currency].name.split('/')[0] }</td>
                <td>{ ask.toFixed(2) }</td>
                <td>{ (expense.value * ask).toFixed(2) }</td>
                <td>Real</td>
                <td>
                  <button type="button" data-testid="edit-btn">Edit</button>
                  <button
                    type="button"
                    data-testid="delete-btn"
                    onClick={ () => this.handleDelet(expense.id) }
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }

  render() {
    return (
      <div>
        TrybeWallet
        { this.header() }
        { this.form() }
        <button
          type="button"
          onClick={ this.handleButton }
        >
          Adicionar Despesa
        </button>
        { this.table() }
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
  idToEdit: state.wallet.idToEdit,
});
const mapDispatchToProps = (dispatch) => ({
  handleCurrencies: (payload) => dispatch(walletCurrenciesAction(payload)),
  handleExpenses: (payload) => dispatch(walletExpensesAction(payload)),
  handleId: (payload) => dispatch(walletIdAction(payload)),
});
Wallet.propTypes = ({
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(Object).isRequired,
  idToEdit: PropTypes.number.isRequired,
  handleExpenses: PropTypes.func.isRequired,
  handleCurrencies: PropTypes.func.isRequired,
  handleId: PropTypes.func.isRequired,
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
