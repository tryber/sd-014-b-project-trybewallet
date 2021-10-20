import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { inputDespesa, valorConvertidoDespesa, saveCurrencies } from '../actions/index';

const URL_BASE = 'https://economia.awesomeapi.com.br/json/all';
class Inputs extends React.Component {
  constructor(props) {
    super(props);
    const { initialState } = this.props;
    this.state = {
      expenses: [],
      value: initialState.value,
      description: initialState.description,
      currency: initialState.currency,
      method: initialState.method,
      tag: initialState.tag,
      button: initialState.button,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.funcTeste = this.funcTeste.bind(this);
  }

  componentDidMount() {
    this.getCurrencyApi();
  }

  componentDidUpdate(nextProps, prevState) {
    if (prevState === this.state) {
      this.funcTeste();
    }
  }

  async getCurrencyApi() {
    const { saveCurrency } = this.props;
    const response = await fetch(URL_BASE);
    const moedaResponse = await response.json();
    const arrayMoedas = Object.keys(moedaResponse);
    saveCurrency(arrayMoedas);
    return moedaResponse;
  }

  funcTeste() {
    const { initialState } = this.props;
    this.setState({ value: initialState.value,
      description: initialState.description,
      currency: initialState.currency,
      method: initialState.method,
      tag: initialState.tag,
      button: initialState.button,
    });
  }

  handleChange({ target }) {
    this.setState({ [target.id]: target.value });
  }

  handleSubmit() {
    const { button } = this.state;
    const { despesaDispatch, valorConvertido, initialState, despesas } = this.props;
    this.setState({ expenses: despesas }, async () => {
      if (button === 'Adicionar despesa') {
        const { value,
          description, currency, method, tag, expenses } = this.state;
        const exchange = await this.getCurrencyApi();
        const newCurrencies = [...expenses,
          { id: expenses.length,
            value,
            description,
            currency,
            method,
            tag,
            exchangeRates: exchange }];
        despesaDispatch(newCurrencies);
        valorConvertido(newCurrencies);
        this.setState({ expenses: newCurrencies });
        this.funcTeste();
      } else {
        const { value, description, currency, method, tag } = this.state;
        const newValue = { id: initialState.id,
          value,
          description,
          currency,
          method,
          tag,
          exchangeRates: initialState.exchangeRates };
        const newDespesas = despesas
          .map((despesa) => (despesa.id !== newValue.id ? despesa : newValue));
        despesaDispatch(newDespesas);
        valorConvertido(newDespesas);
        this.setState({
          expenses: newDespesas,
          button: 'Adicionar despesa',
        });
      }
    });
  }

  render() {
    const { value, description, currency, method, tag, button } = this.state;
    const { moedas } = this.props;
    return (
      <form onSubmit={ this.handleSubmit }>
        <label htmlFor="value">
          Valor
          <input id="value" type="text" value={ value } onChange={ this.handleChange } />
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
        <label htmlFor="currency">
          Moeda
          <select id="currency" value={ currency } onChange={ this.handleChange }>
            {moedas.filter((code) => code !== 'USDT')
              .map((elemt) => <option key={ elemt } value={ elemt }>{ elemt }</option>)}
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento
          <select id="method" value={ method } onChange={ this.handleChange }>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag" value={ tag } onChange={ this.handleChange }>
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <button value={ button } type="button" onClick={ this.handleSubmit }>
          { button }
        </button>
      </form>
    );
  }
}

Inputs.propTypes = {
  despesaDispatch: PropTypes.func.isRequired,
  valorConvertido: PropTypes.func.isRequired,
  saveCurrency: PropTypes.func.isRequired,
  despesas: PropTypes.objectOf.isRequired,
  initialState: PropTypes.objectOf.isRequired,
  moedas: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  despesas: state.wallet.expenses,
  moedas: state.wallet.currencies,
  initialState: state.soma.stateEdit,
});

const mapDispatchToProps = (dispatch) => ({
  despesaDispatch: (e) => dispatch(inputDespesa(e)),
  valorConvertido: (e) => dispatch(valorConvertidoDespesa(e)),
  saveCurrency: (e) => dispatch(saveCurrencies(e)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Inputs);
