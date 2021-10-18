import PropTypes from 'prop-types';
import React from 'react';

class Input extends React.Component {
  render() {
    const { type, placeholder, testid, name, value, onChange } = this.props;

    return (
      <input
        data-testid={ testid }
        type={ type }
        placeholder={ placeholder }
        name={ name }
        value={ value }
        onChange={ onChange }
      />
    );
  }
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
