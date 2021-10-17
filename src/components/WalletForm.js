import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrencies, addExpense, updateTotal } from '../actions';

class WalletForm extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      currency: 'USD',
      method: 'Cartão de Crédito',
      tag: 'Alimentação',
      description: '',
      exchangeRates: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() { // Ao iniciar a aplicação a função didMount vai executar a getCurrencies.
    const { getCurrencies } = this.props; // Desestrutura a getCurrencies das props.
    getCurrencies(); // Executa a função para pegar o câmbio
  }

  async exchangeRates() {
    const { currencies, getCurrencies } = this.props; // Desestruturo os cambios e a função getCurrencies das props.
    await getCurrencies(); // Aguardo o retorno da requisição da função getCurrencies
    await this.setState((state) => ({
      ...state,
      exchangeRates: currencies[0],
    })); // Espero setar o estado após o retorno da requisição da getCurrencies.
  }

  async handleSubmit(event) {
    event.preventDefault();
    const { addExpenseProp, updateTotalProp } = this.props;
    await this.exchangeRates(); // Aguardo a função exchangeRates ser executada
    addExpenseProp(this.state); // Faço o dispatch da action addExpense para adicionar as despesas
    updateTotalProp(); // Faço o dispatch da action updateTotal para atualizar o total das despesas
    this.setState((state) => ({
      ...state,
      value: '',
      description: '',
      exchangeRates: {},
    }));
  }

  // Função generica para salvar no estado do componente as alterações do input
  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  // Função render para gerar as opções de moedas.
  renderCurrencyOptions() {
    const { currencies } = this.props;
    if (currencies.length > 0) {
      return Object.keys(currencies[0]).map((currency, index) => (
        <option key={ index } value={ currency }>{ currency }</option>
      ));
    }
  }

  // Função render para gerar as opções de Tag.
  renderTagOptions() {
    const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return tags.map((tag, index) => (
      <option key={ index } value={ tag }>{ tag }</option>
    ));
  }

  // Função render para gerar as opções de metodo de pagamento.
  renderMethodOptions() {
    const methods = ['Cartão de crédito', 'Cartão de débito', 'Dinheiro'];
    return methods.map((method, index) => (
      <option key={ index } value={ method }>{ method }</option>
    ));
  }

  // Função generica para adicionar os atributos do input dinamicamente.
  renderInput(type, name, id, value) {
    return (
      <input
        type={ type }
        name={ name }
        id={ id }
        value={ value }
        onChange={ this.handleChange }
        required
      />
    );
  }

  render() {
    const { value, currency, method, tag, description } = this.state;
    const { handleChange, handleSubmit } = this;
    return (
      <form onSubmit={ handleSubmit }>
        <label htmlFor="input-value">
          Valor:
          { this.renderInput('number', 'value', 'input-value', value) }
          <input type="text" name="value" />
        </label>
        <label htmlFor="input-description">
          Descrição:
          { this.renderInput('text', 'description', 'input-description', description) }
          <input type="text" name="description" />
        </label>
        <label htmlFor="select-currency">
          Moeda:
          <select
            id="select-currency"
            name="currency"
            value={ currency }
            onChange={ handleChange }
          >
            { this.renderCurrencyOptions() }
          </select>
        </label>
        <label htmlFor="select-payment">
          Método de pagamento:
          <select
            name="method"
            id="select-payment"
            value={ method }
            onChange={ handleChange }
          >
            { this.renderMethodOptions() }
          </select>
        </label>
        <label htmlFor="select-tag">
          Tag:
          <select name="tag" id="select-tag" value={ tag } onChange={ handleChange }>
            { this.renderTagOptions() }
          </select>
        </label>
        <button type="submit">Adicionar Despesas</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchCurrencies()),
  addExpenseProp: (expense) => dispatch(addExpense(expense)),
  updateTotalProp: () => dispatch(updateTotal()),
});

WalletForm.propTypes = {
  currencies: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  getCurrencies: PropTypes.func.isRequired,
  addExpenseProp: PropTypes.func.isRequired,
  updateTotalProp: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
