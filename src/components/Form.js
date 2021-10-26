import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from './Input';
import SelectCurrency from './SelectCurrency';
import { submitExpenses } from '../actions';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
      exchangeRates: '',
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  }

  handleClick = () => {
    const { currencyCurrent, submitExpensesForm } = this.props;
    this.setState({ exchangeRates: currencyCurrent });
    submitExpensesForm(this.state);
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    return (
      <div>
        <form>
          <Input
            label="Valor"
            type="text"
            name="valor"
            value={ value }
            onChange={ this.handleChange }
          />
          <Input
            label="Descrição"
            type="text"
            name="descricao"
            value={ description }
            onChange={ this.handleChange }
          />
          <SelectCurrency value={ method } onChange={ this.handleChange } />
          <label htmlFor="pagamento">
            Método de pagamento
            <select id="pagamento" value={ currency } onChange={ this.handleChange }>
              <option value="Dinheiro">Dinheiro</option>
              <option value="cartao-de-credito">Cartão de crédito</option>
              <option value="cartao-de-debito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select id="tag" value={ tag } onChange={ this.handleChange }>
              <option value="alimentacao">Alimentação</option>
              <option value="lazer">Lazer</option>
              <option value="trabalho">Trabalho</option>
              <option value="transporte">Transporte</option>
              <option value="dinheiro">Saúde</option>
            </select>
          </label>
          <button type="button" onClick={ this.handleClick }>Adicionar despesa</button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  submitExpensesForm: PropTypes.func.isRequired,
  currencyCurrent: PropTypes.objectOf((
    PropTypes.any
  )).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  submitExpensesForm: dispatch(submitExpenses(dispatch)),
});

const mapStateToProps = (state) => ({
  currencyCurrent: state.currency,
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
