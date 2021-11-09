import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectLabel extends Component {
  render() {
    const { html, text, options, onChange, name, value } = this.props;
    return (
      <label htmlFor={ html }>
        {text}
        <select
          id={ html }
          onChange={ onChange }
          name={ name }
          value={ value }
        >
          {
            options.map((option) => (
              <option
                key={ value }
              >
                {option}
              </option>
            ))
          }
        </select>
      </label>
    );
  }
}

SelectLabel.propTypes = {
  html: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default SelectLabel;
