import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from './Input';
import { submitExpense } from '../actions';

class WalletForm extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: {},
      id: 0,
    };
    this.submitExpense = this.submitExpense.bind(this);
  }

  // Implementação do Requisito 8 com ajuda da Renata Teixeira - Turma 14b
  async submitExpense() {
    const { id } = this.state;
    const { dispatchExpenses } = this.props;
    const apiResult = await fetch('https://economia.awesomeapi.com.br/json/all')
      .then((res) => res.json());
    this.setState({
      exchangeRates: apiResult,
    });
    dispatchExpenses(this.state);
    this.setState({ id: id + 1 });
  }

  handleChange({ target }) {
    this.setState({ [target.name]: target.value });
  }

  selects() {
    const { currencies } = this.props;
    return (
      <div>
        <label htmlFor="coin">
          Moeda
          <select name="currency" id="coin" onChange={ (e) => this.handleChange(e) }>
            {Object.keys(currencies).map((currency, index) => (
              <option key={ index } name={ currency }>{currency}</option>
            ))}
          </select>
        </label>

        <label htmlFor="payment-method">
          Método de pagamento
          <select
            name="method"
            id="payment-method"
            onChange={ (e) => this.handleChange(e) }
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="category">
          Tag
          <select name="tag" onChange={ (e) => this.handleChange(e) }>
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </div>
    );
  }

  render() {
    return (
      <form>
        <Input
          label="Valor"
          name="value"
          onChange={ (e) => this.handleChange(e) }
        />
        <Input
          label="Descrição"
          name="description"
          onChange={ (e) => this.handleChange(e) }
        />
        {this.selects()}
        <button type="button" onClick={ this.submitExpense }>
          Adicionar despesa
        </button>
      </form>
    );
  }
}

WalletForm.propTypes = {
  currencies: PropTypes.shape({}).isRequired,
  dispatchExpenses: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  // expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchExpenses: (state) => dispatch(submitExpense(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
