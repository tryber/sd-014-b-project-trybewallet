import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tag extends Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label htmlFor="tag">
        Tag:
        <select
          name="category"
          id="tag"
          value={ value }
          onChange={ (event) => handleChange(event) }
        >
          <option value="foodOption">Alimentação</option>
          <option value="funOption">Lazer</option>
          <option value="workOption">Trabalho</option>
          <option value="transportOption">Transporte</option>
          <option value="healthOption">Saúde</option>
        </select>
      </label>
    );
  }
}

Tag.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Tag;
