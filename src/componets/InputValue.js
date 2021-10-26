import React from 'react';
import PropTypes from 'prop-types';

class InputValue extends React.Component {
  render() {
    const { label, type, name } = this.props;
    return (
      <label htmlFor={ name }>
        { label }
        :
        <input type={ type } name={ name } id={ name } />
      </label>
    );
  }
}

InputValue.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default InputValue;
