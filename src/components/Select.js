import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Select extends Component {
  render() {
    const { title, id, onChange, values } = this.props;
    return (
      <label htmlFor={ id }>
        { title }
        <select
          id={ id }
          onChange={ onChange }
        >
          { values.map((value, index) => (
            <option
              key={ index }
              value={ value }
            >
              { value }
            </option>
          ))}
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  values: PropTypes.shape({
    map: PropTypes.func,
  }).isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};
