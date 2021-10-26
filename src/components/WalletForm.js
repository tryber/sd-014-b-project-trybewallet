import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCurrencies, addExpense, endpoint } from '../actions';

const paymentOptions = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const expenseOptions = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

class WalletForm extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      valueInput: '',
      descriptionInput: '',
      payments: paymentOptions,
      expenses: expenseOptions,
      paymentValue: paymentOptions[0],
      expenseValue: expenseOptions[0],
      currencyValue: 'USD',
    };
    this.handleChange = this.handleChange.bind(this);
    this.LabelOptions = this.LabelOptions.bind(this);
    this.LabelInput = this.LabelInput.bind(this);
    this.ButtonElement = this.ButtonElement.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  async componentDidMount() {
    const { fetchCurrenciesToGlobalState } = this.props;
    await fetchCurrenciesToGlobalState();
  }

  handleChange(event) {
    const { value, name } = event.target;

    this.setState({
      [name]: value,
    });
  }

  LabelOptions(options, id, name, value) {
    return (
      <select
        name={ name }
        id={ id }
        value={ value }
        onChange={ this.handleChange }
      >
        {options.map((option, index) => (
          <option key={ index }>
            { option }
          </option>
        ))}
      </select>
    );
  }

  LabelInput(type, name, value) {
    return (
      <input
        type={ type }
        name={ name }
        id={ name }
        value={ value }
        onChange={ this.handleChange }
      />
    );
  }

  async handleClick() { // adaptado do PR#1 de Michael Caxias - https://github.com/tryber/sd-014-b-project-trybewallet/pull/1
    const { id, valueInput,
      descriptionInput, currencyValue, paymentValue, expenseValue } = this.state;
    const { diaptchExpenseToGlobalState } = this.props;
    const fetchUrl = await fetch(endpoint);
    const jsonParsing = await fetchUrl.json();
    const expenseToBeDispatched = {
      value: valueInput,
      description: descriptionInput,
      id,
      exchangeRates: jsonParsing,
      currency: currencyValue,
      method: paymentValue,
      tag: expenseValue,
    };
    diaptchExpenseToGlobalState(expenseToBeDispatched);
    this.setState((prev) => ({
      valueInput: '',
      descriptionInput: '',
      id: prev.id + 1,
    }));
  }

  ButtonElement(func) {
    return (
      <button type="button" onClick={ func }>
        Adicionar despesa
      </button>
    );
  }

  render() {
    const { isFetching, currenciesFromGlobalState } = this.props;
    const {
      valueInput, descriptionInput,
      payments, expenses, paymentValue, expenseValue,
      currencyValue } = this.state;
    return (
      <section>
        <form>
          <label htmlFor="valueInput">
            Valor
            { this.LabelInput('number', 'valueInput', valueInput) }
          </label>
          <label htmlFor="descriptionInput">
            Descrição
            { this.LabelInput('text', 'descriptionInput', descriptionInput) }
          </label>
          <label htmlFor="currency-input">
            Moeda
            <select
              name="currencyValue"
              id="currency-input"
              value={ currencyValue }
              onChange={ this.handleChange }
            >
              { isFetching ? <option>loading...</option>
                : currenciesFromGlobalState
                  .map((currency, index) => <option key={ index }>{ currency }</option>) }
            </select>
          </label>
          <label htmlFor="payment-options">
            Método de pagamento
            {this.LabelOptions(payments, 'payment-options', 'paymentValue', paymentValue)}
          </label>
          <label htmlFor="tag-options">
            Tag
            {this.LabelOptions(expenses, 'tag-options', 'expenseValue', expenseValue)}
          </label>
          {this.ButtonElement(this.handleClick)}
        </form>
      </section>
    );
  }
}

WalletForm.propTypes = {
  currenciesFromGlobalState: PropTypes.arrayOf(PropTypes.string).isRequired, // adaptado de https://dev.to/cesareferrari/how-to-specify-the-shape-of-an-object-with-proptypes-3c56
  isFetching: PropTypes.bool.isRequired,
  fetchCurrenciesToGlobalState: PropTypes.func.isRequired,
  diaptchExpenseToGlobalState: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({ // adaptado do course, bloco 15.4 (Actions Assíncronas), no conteúdo 'Exemplos guiados'; link: https://app.betrybe.com/course/front-end/gerenciamento-de-estado-com-redux/usando-o-redux-no-react-actions-assincronas/5e038872-db20-44f5-b6d5-ab36b654fff6/conteudos/4024403d-2645-41c3-9916-76f37bb7997f/exemplos-guiados/4c67f17a-9c4f-4067-a702-4b15c4c055b5?use_case=side_bar
  currenciesFromGlobalState: state.wallet.currencies,
  isFetching: state.wallet.isFetching,
});

const mapDispatchToProps = (dispatch) => ({ // adaptado do course, bloco 15.4 (Actions Assíncronas), no conteúdo 'Exemplos guiados'; link: https://app.betrybe.com/course/front-end/gerenciamento-de-estado-com-redux/usando-o-redux-no-react-actions-assincronas/5e038872-db20-44f5-b6d5-ab36b654fff6/conteudos/4024403d-2645-41c3-9916-76f37bb7997f/exemplos-guiados/4c67f17a-9c4f-4067-a702-4b15c4c055b5?use_case=side_bar
  fetchCurrenciesToGlobalState: () => dispatch(fetchCurrencies()),
  diaptchExpenseToGlobalState: (expense) => dispatch(addExpense(expense)), // adaptado do PR#1 de Michael Caxias - https://github.com/tryber/sd-014-b-project-trybewallet/pull/1
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
