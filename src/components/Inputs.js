import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Inputs extends Component {
  render() {
    const { name, label, page, type, onHandleChange, value } = this.props;
    return (
      <label htmlFor={ `${name}-${page}` }>
        {label}
        <input
          name={ name }
          id={ `${name}-${page}` }
          type={ type }
          data-testid={ `${name}-input` }
          onChange={ onHandleChange }
          value={ value }
        />
      </label>
    );
  }
}

Inputs.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  page: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onHandleChange: PropTypes.func.isRequired,
};

Inputs.defaultProps = {
  page: 'general',
  type: 'text',
  value: undefined,
};

export default Inputs;
