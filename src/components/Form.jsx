import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { Select } from '.';
import { getUpdataAPI, saveExpenses } from '../actions';

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
    console.log(name, value);
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
    const { id, value, description, currency, method, tag } = this.state;
    const { currencies } = this.props;
    return (
      <section>
        <form>
          <label htmlFor="value">
            Valor
            <input
              type="text"
              name="value"
              value={ value }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="description">
            Descrição
            <input
              type="text"
              name="description"
              onChange={ this.handleChange }
              />
          </label>
          <Select
            name="currency"
            values={ currencies }
            onChange={ this.handleChange }
          />
          <Select
            name="payment-method"
            values={ ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'] }
            onChange={ this.handleChange }
          />
          <Select
            name="tag"
            values={ ['Alimentação',
              'Lazer',
              'Trabalho',
              'Transporte',
              'Saúde'] }
            onChange={ this.handleChange }
          />
          <label htmlFor="btnAddExpenses">
            <input
              className=""
              type="button"
              name="btnAddExpenses"
              value="Adicionar despesa"
              onClick={ this.addExpenses }
            />
          </label>
        </form>
      </section>
    );
  }
}

Form.propTypes = {
  // currencies: PropTypes.object.isRequired,
  // updateRates: PropTypes.object.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  updateRates: () => dispatch(getUpdataAPI()),
  saveUserData: (expense) => dispatch(saveExpenses(expense)),
});

export default connect(null, mapDispatchToProps)(Form);
