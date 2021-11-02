import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const { labelText, name, id, options, value, onChange } = this.props;
    return (
      <label htmlFor={ id }>
        { labelText }
        <select id={ id } name={ name } value={ value } onChange={ onChange }>
          { options.map(
            (option, index) => (
              <option key={ index }>
                {option}
              </option>),
          )}
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  labelText: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

Select.defaultProps = {
  options: [''],
};

export default Select;
