import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Select extends Component {
  render() {
    const {
      label,
      name,
      onChange,
      value,
      id,
      options,
    } = this.props;
    return (
      <label htmlFor={ name }>
        { label }
        <select
          name={ name }
          id={ id }
          required
          onChange={ onChange }
          value={ value }
        >
          {
            options.map((element, index) => (
              <option key={ index } value={ element }>{ element }</option>
            ))
          }
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

Select.defaultProps = {
  id: '',
};
