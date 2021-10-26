import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Select extends Component {
  render() {
    const { label, name, value, options, handleChange, id } = this.props;
    return (
      <label htmlFor={ id }>
        { label }
        <select
          name={ name }
          value={ value }
          onChange={ handleChange }
          id={ id }
          className="form-select"
        >
          { options.map((data, index) => (
            <option key={ index } value={ data }>{data}</option>
          )) }
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  label: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Select;
