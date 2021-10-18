import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Select extends Component {
  render() {
    const { field, array, label, value, onChange } = this.props;
    return (
      <label htmlFor={ field }>
        { label }
        <select value={ value } name={ field } onChange={ onChange } id={ field }>
          {array.map((element, index) => (
            <option
              value={ element }
              key={ index }
            >
              {element}

            </option>))}
        </select>
      </label>

    );
  }
}

Select.propTypes = {
  array: PropTypes.arrayOf(PropTypes.any).isRequired,
  field: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.string.isRequired,
};

Select.defaultProps = {
  onChange: null,
};

export default Select;
