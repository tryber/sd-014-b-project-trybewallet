import PropTypes from 'prop-types';
import React, { Component } from 'react';

class CategorySelect extends Component {
  render() {
    const { tag, handleChange } = this.props;
    return (
      <label htmlFor="tag">
        Tag
        <select id="tag" value={ tag } onChange={ (e) => handleChange(e) }>
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
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
