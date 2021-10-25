import PropTypes from 'prop-types';
import React from 'react';

class Input extends React.Component {
  render() {
    const { type, placeholder, testid, id, value, onChange } = this.props;

    return (
      <input
        data-testid={ testid }
        type={ type }
        placeholder={ placeholder }
        id={ id }
        value={ value }
        onChange={ onChange }
      />
    );
  }
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
