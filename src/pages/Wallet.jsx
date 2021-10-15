import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import {
  addExpense as addExpenseAction,
  editExpense as editExpenseAction,
} from '../actions';
import Table from '../components/Table';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      returnAPI: null,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      edit: false,
    };
  }

  componentDidMount = async () => {
    let returnAPI = await fetch('https://economia.awesomeapi.com.br/json/all');
    returnAPI = await returnAPI.json();
    this.update(returnAPI);
  }

  addDespesa = async () => {
    const { id, value, description, method, tag, currency } = this.state;
    const { addExpense } = this.props;
    let returnAPI = await fetch('https://economia.awesomeapi.com.br/json/all');
    returnAPI = await returnAPI.json();
    this.setState({ id: id + 1 });
    addExpense({
      id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: returnAPI,
    });
  }

  update = async (returnAPI) => {
    await this.setState({ returnAPI });
  }

  editing = (item) => {
    const { edit } = this.state;
    const { editExpense } = this.props;
    this.setState({ edit: !edit });
    if (!edit) {
      const { id, description, tag, method, value, currency } = item;
      this.setState({ id, description, tag, method, value, currency });
    } else {
      const { id, description, tag, method, value, currency } = this.state;
      editExpense({ id, description, tag, method, value, currency });
    }
  }

  seila = () => {
    const { value, description } = this.state;
    return (
      <>
        <label htmlFor="valor">
          Valor:
          <input
            type="text"
            id="valor"
            value={ value }
            onChange={ (e) => this.setState({ value: e.target.value }) }
          />
        </label>
        <label htmlFor="description">
          Descrição:
          {' '}
          <input
            type="text"
            id="description"
            value={ description }
            onChange={ (e) => this.setState({ description: e.target.value }) }
          />
        </label>
      </>
    );
  }

  tagOptions = () => {
    const { tag } = this.state;
    return (
      <label htmlFor="tag">
        Tag:
        <select
          name="tag"
          id="tag"
          value={ tag }
          onChange={ (e) => this.setState({ tag: e.target.value }) }
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

  paymentoptions = () => {
    const { method } = this.state;
    return (
      <label htmlFor="payment">
        Método de Pagamento:
        {' '}
        <select
          name="payment"
          id="payment"
          value={ method }
          onChange={ (e) => this.setState({ method: e.target.value }) }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }

  moedas = () => {
    const { returnAPI, currency } = this.state;
    if (returnAPI) {
      const keys = Object.keys(returnAPI).filter((item) => item !== 'USDT');
      return (
        <label htmlFor="currency">
          Moeda:
          {' '}
          <select
            name="currency"
            id="currency"
            value={ currency }
            onChange={ (e) => this.setState({ currency: e.target.value }) }
          >
            { keys.map((key) => (
              <option value={ key } key={ key }>
                { key }
              </option>
            )) }
          </select>
        </label>
      );
    }
    return (<div>Loading...</div>);
  }

  render() {
    const { email, total } = this.props;
    const { edit } = this.state;
    return (
      <div>
        <div data-testid="email-field">{email}</div>
        <div data-testid="header-currency-field">BRL</div>
        <div>
          Total:
          <span data-testid="total-field">{ total.toFixed(2) }</span>
        </div>
        <form action="">
          { this.seila() }
          { this.moedas() }
          { this.paymentoptions() }
          { this.tagOptions() }
          { edit ? (
            <button
              type="button"
              onClick={ this.editing }
              name="complete"
              data-testid="edit-btn"
            >
              Editar despesa
            </button>
          ) : (
            <button type="button" onClick={ this.addDespesa }>
              Adicionar Despesa
            </button>
          )}
        </form>
        <Table editing={ this.editing } />
      </div>
    );
  }
}

Wallet.propTypes = {
  addExpense: PropTypes.func.isRequired,
  editExpense: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  total: PropTypes.shape({
    toFixed: PropTypes.func,
  }).isRequired,
};

const calculateTotal = (state) => {
  if (state.wallet.expenses && state.wallet.expenses.length > 0) {
    let total = 0;
    let rate;
    state.wallet.expenses.forEach((item) => {
      rate = item.currency;
      total += item.value * Number(item.exchangeRates[rate].ask);
    });
    return total;
  }
  return 0;
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  total: calculateTotal(state),
});

const mapDispatchToProps = (dispatch) => ({
  addExpense: (e) => dispatch(addExpenseAction(e)),
  editExpense: (e) => dispatch(editExpenseAction(e)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
