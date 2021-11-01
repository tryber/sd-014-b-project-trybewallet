import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Select, ButtonForm, Input } from '../index';
import { getUpdataAPI, saveExpenses } from '../../actions';

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.addExpenses = this.addExpenses.bind(this);

    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  async addExpenses() {
    const { updateRates, saveUserData } = this.props;
    await updateRates();
    saveUserData(this.state);
    this.setState((prevState) => ({
      id: prevState.id + 1,
    }));
  }

  render() {
    const { value, description } = this.state;
    const { currencies } = this.props;
    return (
      <form>
        <Input
          value={ value }
          idAndFor="value"
          title="Valor"
          onChange={ this.handleChange }
        />
        <Input
          value={ description }
          idAndFor="description"
          title="Descrição"
          onChange={ this.handleChange }
        />
        <Select
          name="currency"
          title="Moeda"
          values={ currencies }
          onChange={ this.handleChange }
        />
        <Select
          name="method"
          title="Método de pagamento"
          values={ ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'] }
          onChange={ this.handleChange }
        />
        <Select
          name="tag"
          title="Tag"
          values={ ['Alimentação',
            'Lazer',
            'Trabalho',
            'Transporte',
            'Saúde'] }
          onChange={ this.handleChange }
        />
        <ButtonForm
          componentName="btnAddExpenses"
          onClick={ this.addExpenses }
          value="Adicionar despesa"
        />
      </form>
    );
  }
}

Form.propTypes = {
  currencies: PropTypes.any,
  saveUserData: PropTypes.func,
  updateRates: PropTypes.func,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  updateRates: () => dispatch(getUpdataAPI()),
  saveUserData: (expense) => dispatch(saveExpenses(expense)),
});

export default connect(null, mapDispatchToProps)(Form);
