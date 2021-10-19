import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { currencies, addExpenses } from '../actions';
import Header from '../Components/Header';
import Inp from '../Components/TextInput';

class Wallet extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.fetchCurrencies = this.fetchCurrencies.bind(this);
    this.addExp = this.addExp.bind(this);

    this.state = {
      value: '',
      description: '',
      curr: [],
      nExpenses: 0,
      tag: '',
      currency: '',
      method: '',
    };
  }

  componentDidMount() {
    this.fetchCurrencies();
  }

  async fetchCurrencies() {
    const requestCurr = await fetch('https://economia.awesomeapi.com.br/json/all');
    const resolveCurr = await requestCurr.json();
    delete resolveCurr.USDT;
    const { dispatchCurrencies } = this.props;
    this.setState({
      curr: [...Object.values(resolveCurr)],
    });
    dispatchCurrencies(resolveCurr);
    return resolveCurr;
  }

  handleChange({ target }) {
    this.setState({
      [target.id]: target.value,
    });
  }

  async addExp() {
    const { nExpenses, value, description, method, currency, tag } = this.state;
    const eRates = await this.fetchCurrencies();
    const { dispatchExpenses } = this.props;
    const obj = {
      id: nExpenses,
      value,
      description,
      method,
      currency,
      tag,
      exchangeRates: eRates,
    };
    const exp = obj.id;
    dispatchExpenses(obj);
    this.setState({
      nExpenses: exp + 1,
    });
  }

  render() {
    const { value, description, curr } = this.state;
    return (
      <>
        <Header />
        <form>
          <Inp id="value" label="Valor" value={ value } onChange={ this.handleChange } />
          <label htmlFor="currency">
            Moeda
            <select id="currency" onChange={ this.handleChange }>
              { curr.map((currency, index) => (
                <option key={ index } value={ currency.code }>
                  { currency.code }
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="method">
            Método de Pagamento
            <select id="method" onChange={ this.handleChange }>
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="description">
            Descrição
            <input
              id="description"
              type="text"
              value={ description }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="tag">
            Tag
            <select id="tag" onChange={ this.handleChange }>
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
          <input type="button" onClick={ this.addExp } value="Adicionar despesa" />
        </form>
      </>
    );
  }
}

Wallet.propTypes = {
  dispatchCurrencies: PropTypes.func.isRequired,
  dispatchExpenses: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  curr: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchExpenses: (state) => dispatch(addExpenses(state)),
  dispatchCurrencies: (state) => dispatch(currencies(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
