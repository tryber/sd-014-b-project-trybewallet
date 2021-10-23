import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { sendWalletInfo } from '../actions';

const paymentMethods = ['', 'Dinheiro', 'Cartão de crédito', 'Cartão de débito'];

const expensesCategory = ['', 'Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

class FormExpensesRedux extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      paymentMethod: 'Dinheiro',
      category: 'Alimentação',
      currencies: [],
      expenses: [],
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
    this.setState({ currencies: response });
  }

  handleChange({ target }) {
    this.setState({ [target.id]: target.value }, console.log(target.value));
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

  handleSubmit() {
    const { sendWalletInfoToGlobal } = this.props;
    const walletInfo = this.state;
    sendWalletInfoToGlobal(walletInfo);
  }

  formEstructure(response) {
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input
            type="text"
            id="value"
            placeholder="Digite o Valor"
            onChange={ ({ target }) => this.setState({ value: target.value }) }
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            type="text"
            id="description"
            placeholder="Digite a Descrição"
            onChange={ ({ target }) => this.setState({ description: target.value }) }
          />
        </label>
        { this.generateSelect('currency', 'Moeda:', response) }
        { this.generateSelect('paymentMethod', 'método de pagamento', paymentMethods) }
        { this.generateSelect('category', 'Tag:', expensesCategory) }
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
    console.log(this.state);
    return (
      this.formEstructure(currencies)
    );
  }
}

FormExpensesRedux.propTypes = {
  sendWalletInfoToGlobal: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return ({
    sendWalletInfoToGlobal: (info) => dispatch(sendWalletInfo(info)),
  });
}

export default connect(null, mapDispatchToProps)(FormExpensesRedux);
