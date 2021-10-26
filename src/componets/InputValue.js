import React from 'react';
import PropTypes from 'prop-types';

class InputValue extends React.Component {
  render() {
    const { label, type, name, value, handleChange } = this.props;
    return (
      <label htmlFor={ name }>
        { label }
        :
        <input type={ type } name={ name } id={ name } value={ value } onChange={ handleChange } />
      </label>
    );
  }
}

InputValue.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default InputValue;
