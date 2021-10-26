import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { saveExpenses } from '../actions/index';

class Forms extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
    this.addMoeda = this.addMoeda.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  addMoeda() {
    const { currencies } = this.props;
    const { currency } = this.state;
    if (currencies === undefined) {
      return 'nao retornou dados da API';
    }
    const filterCurrency = Object.keys(currencies)
      .filter((filtered) => filtered !== 'USDT');
    return (
      <label htmlFor="currency">
        Moeda
        <select id="currency" value={ currency } onChange={ this.handleChange }>
          { filterCurrency.map((coin) => (
            <option
              key={ coin }
              value={ coin }
            >
              { coin }
            </option>)) }
        </select>
      </label>
    );
  }

  handleChange({ target: { id, value } }) {
    this.setState({
      [id]: value,
    });
  }

  handleClick() {
    const { id, value, description, currency, method, tag } = this.state;
    const { currencies, sendExpenses } = this.props;
    const allExpenses = {
      id, value, description, currency, method, tag, exchangeRates: currencies,
    };
    sendExpenses(allExpenses);
    this.setState((previousState) => ({
      id: previousState.id + 1,
    }));
  }

  render() {
    const { value, description, method, tag } = this.state;
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input
            type="text"
            id="value"
            value={ value }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            type="text"
            id="description"
            value={ description }
            onChange={ this.handleChange }
          />
        </label>
        {this.addMoeda()}
        <label htmlFor="method">
          Método de pagamento
          <select id="method" value={ method } onChange={ this.handleChange }>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Credito">Cartão de crédito</option>
            <option value="Debito">Cartão de débito</option>
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
        <button type="button" onClick={ this.handleClick }>
          Adicionar Despesas
        </button>
      </form>
    );
  }
}

Forms.propTypes = {
  currencies: PropTypes.string.isRequired,
  sendExpenses: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    currencies: state.currencyReducer.currencies,
  };
}

const mapDispatchToProps = (dispatch) => ({
  sendExpenses: (rates) => dispatch(saveExpenses(rates)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Forms);
