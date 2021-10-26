import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { onChange, textButton } = this.props;
    return (
      <button type="button" onChange={ onChange }>
        { textButton }
      </button>
    );
  }
}

Button.propTypes = {
  onChange: PropTypes.func.isRequired,
  textButton: PropTypes.string.isRequired,
};

export default Button;
