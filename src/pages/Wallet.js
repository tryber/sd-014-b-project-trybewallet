import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addExpenseAction, fetchCurrencies } from '../actions';

const WALLET_INIT_STATE = {
  total: 0,
  value: 0.00,
  currency: 'USD',
  method: 'Dinheiro',
  description: '',
  tag: 'Alimentação',
  currData: {},
};

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = WALLET_INIT_STATE;

    this.renderExpensesForm1 = this.renderExpensesForm1.bind(this);
    this.renderExpensesForm2 = this.renderExpensesForm2.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.setCurrenciesToLocalState = this.setCurrenciesToLocalState.bind(this);
    this.addExpenseClick = this.addExpenseClick.bind(this);
    this.calculateTotalExpenses = this.calculateTotalExpenses.bind(this);
  }

  async componentDidMount() {
    await this.setCurrenciesToLocalState();
  }

  async setCurrenciesToLocalState() {
    const { fetchCurrenciesData } = this.props;
    const currData = await fetchCurrenciesData();
    this.setState({
      currData: currData.payload,
    });
  }

  changeHandler({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  async addExpenseClick() {
    const { value, description, currency, method, tag } = this.state;
    const { addExpenseToWallet, fetchCurrenciesData } = this.props;
    const exchangeRates = await fetchCurrenciesData();
    await addExpenseToWallet({
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: exchangeRates.payload,
    });
    this.setState({
      value: 0.00,
      currency: 'USD',
      method: 'Dinheiro',
      description: '',
      tag: 'Alimentação',
    });
    this.calculateTotalExpenses();
  }

  // calculateTotalExpenses() {
  //   const { totalExpenses } = this.props;
  //   const totalReduce = totalExpenses.reduce((acc, curr) => {
  //     const exchangeRatesObj = curr.exchangeRates;
  //     const { currency } = curr;
  //     const rates = Object.values(exchangeRatesObj[currency])[3];
  //     const ratedValue = parseFloat(curr.value).toFixed(2) * parseFloat(rates);
  //     return acc + (Math.round(ratedValue * 100) / 100).toFixed(2);
  //   }, 0);
  //   this.setState({ total: parseFloat(totalReduce) });
  //   console.log(this.state.total);
  // }

  calculateTotalExpenses() {
    const { totalExpenses } = this.props;
    const teste = totalExpenses.map((exp) => {
      const rates = parseFloat(exp.exchangeRates[exp.currency].ask);
      const value = parseFloat(exp.value).toFixed(2);
      return rates * value;
    }).reduce((acc, curr) => acc + curr, 0);
    this.setState({
      total: parseFloat(teste).toFixed(2),
    });
  }

  renderExpensesForm1() {
    const { value, description, currency, currData } = this.state;
    return (
      <div>
        <label htmlFor="expense-value">
          Valor
          <input
            type="number"
            id="expense-value"
            name="value"
            value={ value }
            onChange={ this.changeHandler }
          />
        </label>
        <label htmlFor="expense-description">
          Descrição
          <input
            type="text"
            id="expense-description"
            name="description"
            value={ description }
            onChange={ this.changeHandler }
          />
        </label>
        <label htmlFor="currency-type">
          Moeda
          <select
            name="currency"
            value={ currency }
            id="currency-type"
            onChange={ this.changeHandler }
          >
            { Object.keys(currData).map((curr, i) => (
              <option key={ i } value={ curr }>
                { curr }
              </option>)) }
          </select>
        </label>
      </div>
    );
  }

  renderExpensesForm2() {
    const { method, tag } = this.state;
    return (
      <div>
        <label htmlFor="payment-method">
          Método de pagamento
          <select
            name="method"
            value={ method }
            id="payment-method"
            onChange={ this.changeHandler }
          >
            <option defaultValue="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="expense-tag">
          Tag
          <select
            name="tag"
            value={ tag }
            id="expense-tag"
            onChange={ this.changeHandler }
          >
            <option defaultValue="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </div>
    );
  }

  render() {
    const { userEmail } = this.props;
    const { total } = this.state;
    return (
      <main>
        <header>
          <h3 data-testid="email-field">{ userEmail }</h3>
          <h3 data-testid="total-field">{ total }</h3>
          <h3 data-testid="header-currency-field">BRL</h3>
        </header>
        <section>
          <form>
            { this.renderExpensesForm1() }
            { this.renderExpensesForm2() }
            <button
              type="button"
              onClick={ () => this.addExpenseClick() }
            >
              Adicionar despesa
            </button>
          </form>
        </section>
      </main>
    );
  }
}

Wallet.propTypes = {
  addExpenseToWallet: PropTypes.func.isRequired,
  currenciesData: PropTypes.shape({
    map: PropTypes.func,
  }).isRequired,
  fetchCurrenciesData: PropTypes.func.isRequired,
  totalExpenses: PropTypes.shape({
    map: PropTypes.func.isRequired,
  }).isRequired,
  userEmail: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  totalExpenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrenciesData: () => dispatch(fetchCurrencies()),
  addExpenseToWallet: (state) => dispatch(addExpenseAction(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
