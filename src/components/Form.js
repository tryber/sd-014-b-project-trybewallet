import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchExchangeRateFromApi } from '../actions/currentExchangeRateAction';
import { addExpense } from '../actions/addExpensesAction';
import Select from './Select';
import Input from './Input';
import Button from './Button';

const ALIMENTACAO = 'Alimentação';
const paymentArray = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const tagArray = [ALIMENTACAO, 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

class Form extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: ALIMENTACAO,
      description: '',
      id: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  async handleClick() {
    const { fetchCurrentExchangeRate, addCurrentExpence } = this.props;
    await fetchCurrentExchangeRate();
    addCurrentExpence(this.state);
    this.setState((prevState) => ({ id: prevState.id + 1 }));
    this.setState({
      value: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: ALIMENTACAO,
      description: '',
    });
  }

  render() {
    const { value, currency, method, tag, description } = this.state;
    const { coinsArray } = this.props;
    return (
      <form className="row row-cols-lg-auto g-3 align-items-center">
        <Input
          labelText="Valor:"
          id="valueId"
          name="value"
          value={ value }
          handleChange={ this.handleChange }
        />
        <Select
          labelText="Moeda:"
          id="currencyId"
          name="currency"
          value={ currency }
          handleChange={ this.handleChange }
          options={ coinsArray }
        />
        <Select
          labelText="Método de pagamento:"
          id="methodId"
          name="method"
          value={ method }
          handleChange={ this.handleChange }
          options={ paymentArray }
        />
        <Select
          labelText="Tag:"
          id="tagId"
          name="tag"
          value={ tag }
          handleChange={ this.handleChange }
          options={ tagArray }
        />
        <Input
          labelText="Descrição:"
          id="descriptionId"
          name="description"
          value={ description }
          handleChange={ this.handleChange }
        />
        <Button
          label="Adicionar despesa"
          onClick={ this.handleClick }
        />
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  coinsArray: state.wallet.currencies,
  currentExchangeRate: state.wallet.currentExchangeRate,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrentExchangeRate: () => dispatch(fetchExchangeRateFromApi()),
  addCurrentExpence: (expense) => dispatch(addExpense(expense)),
});

Form.propTypes = {
  coinsArray: PropTypes.arrayOf(PropTypes.string).isRequired,
  fetchCurrentExchangeRate: PropTypes.func.isRequired,
  addCurrentExpence: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
