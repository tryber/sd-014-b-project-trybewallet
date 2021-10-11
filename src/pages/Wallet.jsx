import React from 'react';
import { connect } from 'react-redux';
import { addExpense, addExpense as addExpenseAction } from '../actions';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    const { email, total } = this.props;
    this.state = {
      id: 0,
      email,
      returnAPI: null,
      valor: 0,
      description: '',
      currency: 'USD',
      payment: 'Dinheiro',
      tag: 'Dinheiro',
      total,
    }
  }

  componentDidMount = async () => {
    let returnAPI = await fetch('https://economia.awesomeapi.com.br/json/all');
    returnAPI = await returnAPI.json();
    this.update(returnAPI);
  }

  addDespesa = async () => {
    const { id, valor, description, payment, tag, currency } = this.state;
    const { addExpense } = this.props;
    let returnAPI = await fetch('https://economia.awesomeapi.com.br/json/all');
    returnAPI = await returnAPI.json();
    this.setState({ id: id + 1})
    addExpense({ id, value: valor, description, currency, method: payment, tag, exchangeRates: returnAPI })
  }

  update = async (returnAPI) => {
    await this.setState({ returnAPI })
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
          onChange={ (e) => this.setState({ currency: e.target.value })}
         >
         { keys.map((key) => (
           <option value={key} key={key}>
             { key }
           </option>
         )) }
        </select>
      </label>
      )
    }
    return (<div>Loading...</div>)
  }
  render() {
    const { email, total } = this.props;
    const { valor, description, payment } = this.state;
    return (
      <div>
        <div data-testid="email-field">{email}</div>
        <div data-testid="header-currency-field">BRL</div>
        <div>Total: <span data-testid="total-field">{total}</span></div>
        <form action="">
          <label htmlFor="valor">
            Valor:
            <input
              type="text"
              id="valor"
              value={ valor }
              onChange={ (e) => this.setState({ valor: e.target.value })}
            />
          </label>

          <label htmlFor="description">
            Descrição:
            {' '}
            <input
              type="text"
              id="description"
              value={ description }
              onChange={ (e) => this.setState({ description: e.target.value })}
            />
          </label>

          { this.moedas() }

          <label htmlFor="payment">
            Método de Pagamento:
            {' '}
            <select
              name="payment"
              id="payment"
              value={ payment }
              onChange={ (e) => this.setState({ payment: e.target.value })}
            >
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>

          <label htmlFor="tag">
            Tag:
            <select
              name="tag"
              id="tag"
              onChange={ (e) => this.setState({ tag: e.target.value })}
            >
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
          <button
            type="button"
            onClick={ this.addDespesa }
          >
            Adicionar Despesa
          </button>
        </form>
      </div>

    );
  }
}

const calculateTotal = (state) => {
  if (state.wallet.expenses.length > 0) {
    let total = 0;
    let rate;
    state.wallet.expenses.forEach(item => {
      rate = item.currency;
      total += item.value * Number(item.exchangeRates[rate].ask);
    });
    return total
  }
  return 0;
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  total: calculateTotal(state),
});

const mapDispatchToProps = (dispatch) => ({
  addExpense: (e) => dispatch(addExpenseAction(e)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
