import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const { name, array, handleChange, label } = this.props;
    return (
      <label htmlFor={ name }>
        { label }
        <select name={ name } id={ name } onChange={ handleChange }>
          {array
            .map((item, index) => <option key={ index } value={ item }>{ item }</option>)}
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  array: PropTypes.arrayOf(PropTypes.string).isRequired,
  label: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Select;
