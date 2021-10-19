import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SelectCurrency from './SelectCurrency';
import { expenses, fetchCurrencies } from '../actions';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      value: '0',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target: { id, value } }) {
    this.setState({ [id]: value });
  }

  handleClick() {
    const { id } = this.state;
    const { expensesDispacth, exchange, currenciesDispatch } = this.props;
    currenciesDispatch();
    expensesDispacth({ ...this.state, exchangeRates: exchange });
    this.setState({ id: id + 1 });
  }

  render() {
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input id="value" type="text" onChange={ this.handleChange } />
        </label>
        <label htmlFor="description">
          Descrição
          <input id="description" type="text" onChange={ this.handleChange } />
        </label>
        <SelectCurrency onChange={ this.handleChange } />
        <label htmlFor="method">
          Método de pagamento
          <select id="method" onChange={ this.handleChange }>
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag" onChange={ this.handleChange }>
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <button type="button" onClick={ this.handleClick }>Adicionar despesa</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  expensesDispacth: (state) => dispatch(expenses(state)),
  currenciesDispatch: () => dispatch(fetchCurrencies()),
});

const mapStateToProps = (state) => ({
  exchange: state.wallet.currencies,
});

Form.propTypes = {
  expensesDispacth: PropTypes.func.isRequired,
  exchange: PropTypes.func.isRequired,
  currenciesDispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
