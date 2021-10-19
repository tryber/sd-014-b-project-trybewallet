import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { methods } from '../data/ExpensesFormData';

class InputMethod extends Component {
  render() {
    const { label, name, value, handleChange } = this.props;
    return (
      <label className="form-label m-1" htmlFor={ name }>
        { label }
        <select
          id="id"
          name={ name }
          value={ value }
          onChange={ handleChange }
        >
          { methods.map((data, index) => (
            <option key={ index } value={ data }>{data}</option>
          )) }
        </select>
      </label>
    );
  }
}

InputMethod.propTypes = {
  label: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default InputMethod;
