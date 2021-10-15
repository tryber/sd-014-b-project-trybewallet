import React from 'react';
import PropTypes from 'prop-types';

class InputPattern extends React.Component {
  render() {
    const { name, value, handleChange, type, description } = this.props;
    return (
      <label htmlFor={ name }>
        { description }
        <input name={ name } value={ value } onChange={ handleChange } type={ type } />
      </label>
    );
  }
}

InputPattern.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
  type: PropTypes.string,
  description: PropTypes.string,
}.isRequered;

export default InputPattern;
