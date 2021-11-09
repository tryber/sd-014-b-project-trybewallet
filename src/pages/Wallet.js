import React from 'react';
import { connect } from 'react-redux';
import { addExpense, fetchCurrenciesInfo } from '../actions/walletActions';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      value: 0,
      description: '',
      currency: 'BRL',
      method: 'Cartão de crédito',
      tag: 'Lazer',
    };

    this.submitExpense = this.submitExpense.bind(this);
  }

  componentDidMount() {
    this.updateCurrencies();
  }

  convertedValue(value, exchangeValue) {
    return (
      parseFloat(value) * parseFloat(exchangeValue)
    ).toFixed(2);
  }

  async updateCurrencies() {
    const { fetchCurrenciesData } = this.props;
    await fetchCurrenciesData();
  }

  async submitExpense(event) {
    event.preventDefault();
    await this.updateCurrencies();

    const {
      expenses,
      addNewExpense,
      currenciesData: exchangeRates,
    } = this.props;

    const expense = {
      id: expenses.length,
      ...this.state,
      exchangeRates,
    };

    addNewExpense(expense);
  }

  renderValueFormSection() {
    const { value } = this.state;
    return (
      <label htmlFor="value">
        Valor:
        <input
          id="value"
          required
          type="number"
          value={ value }
          onChange={ (ev) => this.setState({ value: ev.target.value }) }
        />
      </label>
    );
  }

  renderDescriptionFormSection() {
    const { description } = this.state;
    return (
      <label htmlFor="description">
        Descrição:
        <input
          id="description"
          type="text"
          required
          value={ description }
          onChange={ (ev) => this.setState({ description: ev.target.value }) }
        />
      </label>
    );
  }

  renderCurrencyFormSection() {
    const { currency } = this.state;
    const { currenciesData } = this.props;
    const tags = Object.keys(currenciesData || {});
    return (
      <label htmlFor="currency">
        Moeda:
        <select
          id="currency"
          required
          value={ currency }
          onChange={ (ev) => this.setState({ currency: ev.target.value }) }
        >
          {tags.map((tag) => (
            <option value={ tag } key={ tag }>
              {currenciesData[tag].name.split('/')[0]}
            </option>
          ))}
        </select>
      </label>
    );
  }

  renderPaymentFormSection() {
    const { method } = this.state;
    return (
      <label htmlFor="method">
        Método de pagamento:
        <select
          id="method"
          required
          value={ method }
          onChange={ (ev) => this.setState({ method: ev.target.value }) }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }

  renderTagFormSection() {
    const { tag } = this.state;
    return (
      <label htmlFor="tag">
        Tag:
        <select
          id="tag"
          required
          value={ tag }
          onChange={ (ev) => this.setState({ tag: ev.target.value }) }
        >
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }

  renderHeader() {
    const { email, expenses } = this.props;
    const convert = (value, exchangeRate) => (
      parseFloat(value) * parseFloat(exchangeRate)
    );

    const totalExpenses = expenses.reduce(
      (sum, expense) => sum + convert(expense.value, expense.exchangeRates[expense.currency].ask),
      0,
    );
    return (
      <header>
        <h1>Wallet</h1>
        <ul>
          <li>
            Email:
            {' '}
            <span data-testid="email-field">{email}</span>
          </li>
          <li>
            Despesa Total:
            {' '}
            <span data-testid="total-field">{totalExpenses}</span>
          </li>
          <li data-testid="header-currency-field">BRL</li>
        </ul>
      </header>
    );
  }

  renderExpenses() {
    const { expenses } = this.props;

    return (
      <tbody>
        {expenses.map((bill) => (
          <tr key={ bill.id }>
            <td>{bill.description}</td>
            <td>{bill.tag}</td>
            <td>{bill.method}</td>
            <td>{parseFloat(bill.value)}</td>
            <td>{bill.exchangeRates[bill.currency].name.split('/')[0]}</td>
            <td>{parseFloat(bill.exchangeRates[bill.currency].ask).toFixed(2)}</td>
            <td>
              {
                this.convertedValue(bill.value, bill.exchangeRates[bill.currency].ask)
              }
            </td>
            <td>Real</td>
            <td />
          </tr>
        ))}
      </tbody>
    );
  }

  render() {
    return (
      <main className="wallet">
        {this.renderHeader()}
        <form onSubmit={ this.submitExpense }>
          {this.renderValueFormSection()}
          {this.renderDescriptionFormSection()}
          {this.renderCurrencyFormSection()}
          {this.renderPaymentFormSection()}
          {this.renderTagFormSection()}
          <button type="submit">Adicionar despesa</button>
        </form>
        <table>
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
          {this.renderExpenses()}
        </table>
      </main>
    );
  }
}

const mapStateToProps = ({
  user: { email },
  wallet: { currenciesData, expenses },
}) => ({
  email,
  currenciesData,
  expenses,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrenciesData: () => dispatch(fetchCurrenciesInfo()),
  addNewExpense: (expense) => dispatch(addExpense(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
