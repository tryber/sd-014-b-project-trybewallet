import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Select extends Component {
  render() {
    const { label, name, value, dataArray, handleChange } = this.props;
    return (
      <label className="form-label m-1" htmlFor={ name }>
        { label }
        <select
          id={ name }
          name={ name }
          value={ value }
          onChange={ handleChange }
          className="form-control"
        >
          { dataArray.map((data, index) => (
            <option key={ index } value={ data }>{data}</option>
          )) }
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  dataArray: PropTypes.arrayOf(PropTypes.string).isRequired,
  label: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Select;
