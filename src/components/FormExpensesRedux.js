import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { sendWalletInfo, sendExpenseInfo } from '../actions';

const paymentMethods = ['', 'Dinheiro', 'Cartão de crédito', 'Cartão de débito'];

const expensesCategory = ['', 'Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

class FormExpensesRedux extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      currencies: [],
      exchangeRates: [],
      expenses: this.props,
      id: 0,
    };

    this.fetchApiCurrencies = this.fetchApiCurrencies.bind(this);
    this.formEstructure = this.formEstructure.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.fetchApiCurrencies();
  }

  async fetchApiCurrencies() {
    const promise = await fetch('https://economia.awesomeapi.com.br/json/all');
    const json = await promise.json();
    delete json.USDT;
    const response = Object.keys(json);
    this.setState({
      currencies: response,
      exchangeRates: json.exchangeRates });
  }

  handleChange({ target }) {
    this.setState({ [target.id]: target.value });
  }

  generateSelect(id, label, array) {
    return (
      <label htmlFor={ id }>
        {label}
        <select id={ id } onChange={ this.handleChange }>
          { array.length > 0 && array.map((info) => (
            <option
              id={ id }
              key={ info }
              value={ info }
            >
              {info}

            </option>)) }
        </select>
      </label>
    );
  }

  // https://stackoverflow.com/questions/55495198/reacts-setstate-method-with-prevstate-argument
  async handleSubmit() {
    const { sendWalletInfoToGlobal, sendExpenseInfoToGlobal } = this.props;
    const responseApi = await fetch('https://economia.awesomeapi.com.br/json/all');
    const json = await responseApi.json();
    const {
      value,
      description,
      currency,
      tag,
      currencies,
      method,
      expenses,
      id,
    } = this.state;
    this.setState((prevState) => ({
      value: Number(value) + Number(prevState.value),
      exchangeRates: json,
    }));
    const newInfo = {
      value, description, currency, method, tag, currencies, expenses, id };
    sendWalletInfoToGlobal(newInfo);
    const newExpense = {
      currency, description, exchangeRates: json, method, id, tag, value };
    sendExpenseInfoToGlobal(newExpense);
    this.setState((prevState) => ({
      id: prevState.id + 1,
      value: '',
      description: '' }));
  }

  formEstructure(response) {
    const { value, description, exchangeRates } = this.state;
    console.log(exchangeRates);
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input
            type="text"
            id="value"
            value={ value }
            placeholder="Digite o Valor"
            onChange={ ({ target }) => this.setState({ value: target.value }) }
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            type="text"
            id="description"
            value={ description }
            placeholder="Digite a Descrição"
            onChange={ ({ target }) => this.setState({ description: target.value }) }
          />
        </label>
        { this.generateSelect('currency', 'Moeda:', response) }
        { this.generateSelect('method', 'método de pagamento', paymentMethods) }
        { this.generateSelect('tag', 'Tag:', expensesCategory) }
        <button
          type="button"
          onClick={ () => this.handleSubmit() }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }

  render() {
    const { currencies } = this.state;
    return (
      this.formEstructure(currencies)
    );
  }
}

FormExpensesRedux.propTypes = {
  sendWalletInfoToGlobal: PropTypes.func.isRequired,
  sendExpenseInfoToGlobal: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return ({
    sendWalletInfoToGlobal: (info) => dispatch(sendWalletInfo(info)),
    sendExpenseInfoToGlobal: (info) => dispatch(sendExpenseInfo(info)),
  });
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, mapDispatchToProps)(FormExpensesRedux);
