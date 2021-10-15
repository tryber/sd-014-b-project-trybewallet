import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Select extends Component {
  render() {
    const { id, label, array, value, onChange } = this.props;
    return (
      <label htmlFor={ id }>
        {label}
        <select id={ id } value={ value } onChange={ onChange }>
          { array.map((element) => (
            <option key={ element } value={ element }>{element}</option>)) }
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  array: PropTypes.shape({
    map: PropTypes.func,
  }).isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
