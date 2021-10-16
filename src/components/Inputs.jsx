import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { inputDespesa, valorConvertidoDespesa } from '../actions/index';

const URL_BASE = 'https://economia.awesomeapi.com.br/json/all';

class Inputs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expenses: [],
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
  }

  async getCurrencyApi() {
    const response = await fetch(URL_BASE);
    const moedaResponse = await response.json();
    return moedaResponse;
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  async handleSubmit() {
    const { despesa, valorConvertido } = this.props;
    const { value, description, currency, method, tag, expenses } = this.state;
    const newId = expenses.length;
    const exchange = await this.getCurrencyApi();
    const getValueConvert = Object.values(exchange)
      .find(({ code }) => code === currency).ask * value;
    valorConvertido(getValueConvert);
    const newCurrencies = [...expenses,
      { id: newId, value, description, currency, method, tag, exchangeRates: exchange }];
    despesa(newCurrencies);
    this.setState({ expenses: newCurrencies });
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { moeda } = this.props;
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
            <option key="" value=""> </option>
            {moeda.map((code) => <option key={ code } value={ code }>{ code }</option>)}
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
            <option value="alimentacao">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>

        <button type="button" onClick={ this.handleSubmit }>
          Adicionar despesa
        </button>
      </form>
    );
  }
}

Inputs.propTypes = {
  moeda: PropTypes.arrayOf(PropTypes.shape({
    map: PropTypes.func.isRequired,
  })).isRequired,
  despesa: PropTypes.func.isRequired,
  valorConvertido: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  despesa: (e) => dispatch(inputDespesa(e)),
  valorConvertido: (e) => dispatch(valorConvertidoDespesa(e)),
});

export default connect(null, mapDispatchToProps)(Inputs);
