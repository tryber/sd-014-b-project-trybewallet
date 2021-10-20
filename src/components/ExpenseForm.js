import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchEndPoint from '../service/API';
import { setExpenses } from '../actions/index';

class ExpenseForm extends Component {
  constructor() {
    super();
    this.state = {
      currency: [],
      valor: 0,
      descricao: '',
      moeda: '',
      pagamento: '',
      tag: '',
    };

    this.renderValue = this.renderValue.bind(this);
    this.renderDescription = this.renderDescription.bind(this);
    this.renderPayment = this.renderPayment.bind(this);
    this.renderTag = this.renderTag.bind(this);
    this.renderCurrency = this.renderCurrency.bind(this);
  }

  componentDidMount() {
    this.getCurrencyApi();
  }

  async getCurrencyApi() {
    const response = await fetchEndPoint();
    const arrayCurrency = Object.keys(response);
    arrayCurrency.splice(arrayCurrency.indexOf('USDT'), 1);

    this.setState({ currency: arrayCurrency });
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { valor, descricao, moeda, pagamento, tag } = this.state;
    const currentExpense = { valor, descricao, moeda, pagamento, tag };
    const { dispatchSetValue, expenses } = this.props;
    let oldExpense = expenses;
    const Id = (oldExpense.length - 1) + 1;
    const newMovie = { ...currentExpense, id: Id };
    oldExpense = [...oldExpense, newMovie];
    dispatchSetValue(oldExpense);
  }

  renderValue() {
    return (
      <label htmlFor="valor">
        Valor
        <input
          id="valor"
          type="number"
          name="valor"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderDescription() {
    return (
      <label htmlFor="descricao">
        Descrição
        <input
          id="descricao"
          type="text"
          name="descricao"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderCurrency() {
    const { currency } = this.state;
    return (
      <label htmlFor="moeda">
        Moeda
        <select
          id="moeda"
          name="moeda"
          onChange={ this.handleChange }
        >
          {currency.map((e, i) => (
            <option key={ i } value={ e }>
              {' '}
              { e }
              {' '}
            </option>
          ))}
        </select>
      </label>
    );
  }

  renderPayment() {
    return (
      <label htmlFor="pagamento">
        Método de pagamento
        <select
          id="pagamento"
          name="pagamento"
          onChange={ this.handleChange }
        >
          <option value="dinheiro">Dinheiro</option>
          <option value="credito">Cartão de crédito</option>
          <option value="debito">Cartão de débito</option>
        </select>
      </label>
    );
  }

  renderTag() {
    return (
      <label htmlFor="tag">
        Tag
        <select
          id="tag"
          name="tag"
          onChange={ this.handleChange }
        >
          <option value="alimentacao"> Alimentacão</option>
          <option value="lazer"> Lazer</option>
          <option value="trabalho"> Trabalho</option>
          <option value="transporte"> Transporte</option>
          <option value="sauide">Saúde </option>

        </select>
      </label>
    );
  }

  render() {
    return (
      <section>
        <form onSubmit={ this.handleSubmit }>
          {this.renderValue()}
          {this.renderDescription()}
          {this.renderCurrency()}
          {this.renderPayment()}
          {this.renderTag()}
        </form>
      </section>
    );
  }
}

ExpenseForm.propTypes = {
  dispatchSetValue: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchSetValue: (value) => dispatch(setExpenses(value)),
});

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);
