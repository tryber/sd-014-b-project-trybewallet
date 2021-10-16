import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CategorySelect extends Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label htmlFor="CategorySelect">
        Tag:
        <select
          name="category"
          id="CategorySelect"
          value={ value }
          onChange={ (event) => handleChange(event) }
        >
          <option value="food">Alimentação</option>
          <option value="recreation">Lazer</option>
          <option value="job">Trabalho</option>
          <option value="transport">Transporte</option>
          <option value="health">Saúde</option>
        </select>
      </label>
    );
  }
}

CategorySelect.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default CategorySelect;
