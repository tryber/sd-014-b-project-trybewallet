import PropTypes from 'prop-types';
import React, { Component } from 'react';

class CategorySelect extends Component {
  render() {
    const { tag, handleChange } = this.props;
    return (
      <label htmlFor="category">
        tag
        <select id="tag" value={ tag } onClick={ (e) => handleChange(e) }>
          <option selected value="Alimentação">alimentação</option>
          <option value="Lazer">lazer</option>
          <option value="Trabalho">trabalho</option>
          <option value="Transporte">transporte</option>
          <option value="Saúde">saúde</option>
        </select>
      </label>
    );
  }
}

CategorySelect.propTypes = {
  tag: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default CategorySelect;
