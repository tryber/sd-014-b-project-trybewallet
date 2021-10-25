import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { expense } from '../actions';

class FormWallet extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: {},
    };
    this.handleclick = this.handleclick.bind(this);
  }

  async handleclick() {
    const { setExpenses } = this.props;
    const URL_API = 'https://economia.awesomeapi.com.br/json/all';
    const result = await fetch(URL_API);
    const response = await result.json();
    // vi esse delete no código do Rafael Moraes no slack
    delete response.USDT;
    const { id } = this.state;
    this.setState({
      exchangeRates: response,
    });
    setExpenses(this.state);
    this.setState({
      id: id + 1,
    });
  }

  selectCoins() {
    const { coinsResult } = this.props;
    return (
      <label htmlFor="moeda">
        Moeda:
        <select
          id="moeda"
          onChange={ ({ target }) => this.setState({ currency: target.value }) }
        >
          { coinsResult.map((moeda) => (
            <option key={ moeda } value={ moeda }>
              { moeda }
            </option>
          ))}
        </select>
      </label>
    );
  }

  render() {
    return (
      <form>
        <label htmlFor="valor">
          Valor:
          <input
            type="number"
            id="valor"
            onChange={ ({ target }) => this.setState({ value: target.value }) }
          />
        </label>
        <label htmlFor="descricao">
          Descrição:
          <input type="text" id="descricao" onChange={ ({ target }) => this.setState({ description: target.value }) } />
        </label>
        { this.selectCoins() }
        <label htmlFor="pagamento">
          Método de pagamento:
          <select id="pagamento" onChange={ ({ target }) => this.setState({ method: target.value }) }>
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select id="tag" onChange={ ({ target }) => this.setState({ tag: target.value }) }>
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <button type="button" onClick={ () => this.handleclick() }>
          Adicionar despesa
        </button>
      </form>
    );
  }
}

FormWallet.propTypes = {
  coinsResult: PropTypes.arrayOf(PropTypes.string).isRequired,
  setExpenses: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setExpenses: (enter) => dispatch(expense(enter)),
});

export default connect(null, mapDispatchToProps)(FormWallet);
