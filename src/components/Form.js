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
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: '',
    };
  }

  componentDidMount = () => {
    this.exchangeRatesUpdate();
  }

  exchangeRatesUpdate = () => {
    const { currency } = this.props;
    this.setState({ exchangeRates: currency });
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  }

  handleClick = () => {
    const { submitExpensesForm } = this.props;
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
            name="value"
            value={ value }
            onChange={ this.handleChange }
          />
          <Input
            label="Descrição"
            type="text"
            name="description"
            value={ description }
            onChange={ this.handleChange }
          />
          <SelectCurrency value={ currency } onChange={ this.handleChange } />
          <label htmlFor="pagamento">
            Método de pagamento
            <select
              id="pagamento"
              name="method"
              value={ method }
              onChange={ this.handleChange }
            >
              <option value="Dinheiro">Dinheiro</option>
              <option value="cartao-de-credito">Cartão de crédito</option>
              <option value="cartao-de-debito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select id="tag" name="tag" value={ tag } onChange={ this.handleChange }>
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
  currency: PropTypes.objectOf((
    PropTypes.any
  )).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  submitExpensesForm: (state) => dispatch(submitExpenses(state)),
});

const mapStateToProps = (state) => ({
  currency: state.currency,
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
