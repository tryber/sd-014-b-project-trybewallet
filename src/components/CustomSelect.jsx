import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class CustomSelect extends Component {
  render() {
    const { options, onChange, id, description } = this.props;
    return (
      <label htmlFor={ id }>
        {description}
        <select id={ id } name={ id } onChange={ onChange }>
          {options.map((element) => (
            <option
              value={ element }
              key={ element }
            >
              { element }
            </option>
          ))}
        </select>
      </label>
    );
  }
}

CustomSelect.propTypes = {
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
