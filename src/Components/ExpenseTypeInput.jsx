import PropTypes from 'prop-types';
import React, { Component } from 'react';

class ExpenseTypeInput extends Component {
  render() {
    const { tag, handleChange } = this.props;
    return (
      <label htmlFor="expense-type">
        Tag
        <select
          id="expense-type"
          name="tag"
          value={ tag }
          onChange={ (event) => handleChange(event) }
        >
          <option value="Alimentacao">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saude">Saúde</option>
        </select>
      </label>
    );
  }
}

ExpenseTypeInput.propTypes = {
  handleChange: PropTypes.func,
  tag: PropTypes.string,
}.isRequired;

export default ExpenseTypeInput;
