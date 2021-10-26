import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Select extends Component {
  render() {
    const {
      nameLabel,
      name,
      onChange,
      value,
      id,
      defaultOption,
      defaultValue,
      arrOptions,
    } = this.props;
    return (
      <label htmlFor={ id }>
        {nameLabel}
        <select
          name={ name } /* saber como usa */
          id={ id }
          onChange={ onChange }
          value={ value } /* saber como usa */
        >
          <option value={ defaultValue }>
            {defaultOption}
          </option>
          {
            arrOptions.map((option, index) => (
              <option key={ index }>{option}</option>
            ))
          }
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  nameLabel: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  arrOptions: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
  defaultValue: PropTypes.string.isRequired,
  defaultOption: PropTypes.string.isRequired,
};
