import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextArea extends Component {
  render() {
    const { name, label, onChange, value, maxLength } = this.props;
    return (
      <label htmlFor={ name }>
        { label }
        <textarea
          name={ name }
          value={ value }
          onChange={ onChange }
          maxLength={ maxLength }
        />
      </label>
    );
  }
}

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  maxLength: PropTypes.string.isRequired,
};

export default TextArea;
