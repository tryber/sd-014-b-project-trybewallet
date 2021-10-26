import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { id, label, value, onChange, name } = this.props;
    return (
      <label htmlFor={ id }>
        { label }
        <input
          value={ value }
          id={ id }
          onChange={ onChange }
          name={ name }
          type="text"
        />
      </label>
    );
  }
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
