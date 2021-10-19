import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addExpenseAction, fetchCurrencies } from '../actions';

const WALLET_INIT_STATE = {
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
    const { addExpenseToWallet } = this.props;
    console.log(await addExpenseToWallet(this.state));
    this.setState({
      value: 0.00,
      currency: 'USD',
      method: 'Dinheiro',
      description: '',
      tag: 'Alimentação',
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
            type="textarea"
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
    return (
      <main>
        <header>
          <h3 data-testid="email-field">{ userEmail }</h3>
          <h3 data-testid="total-field">{ 0 }</h3>
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
  userEmail: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrenciesData: () => dispatch(fetchCurrencies()),
  addExpenseToWallet: (state) => dispatch(addExpenseAction(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
