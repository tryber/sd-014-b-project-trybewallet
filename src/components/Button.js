import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { onClick, textButton } = this.props;
    return (
      <button type="button" onClick={ onClick }>
        { textButton }
      </button>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  textButton: PropTypes.string.isRequired,
};

export default Button;
