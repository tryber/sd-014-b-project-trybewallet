import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const { label, id, value, onChange, children } = this.props;
    return (
      <label htmlFor={ id }>
        { label }
        <select
          id={ id }
          value={ value }
          name={ id }
          onChange={ onChange }
        >
          { children }
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Select;
