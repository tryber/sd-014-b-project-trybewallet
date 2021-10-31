import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class SelectDefault extends Component {
  render() {
    const { name, options, label, onChange, value } = this.props;
    return (
      <label htmlFor={ `${name}-input` }>
        { label }
        <select
          name={ name }
          id={ `${name}-input` }
          onChange={ onChange }
          value={ value }
        >
          { options && options.map((option) => (
            <option
              key={ option }
              value={ option }
            >
              { option }
            </option>))}
        </select>
      </label>
    );
  }
}

SelectDefault.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
