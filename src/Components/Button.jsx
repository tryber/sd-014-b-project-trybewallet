import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
  render() {
    const { text, onClick, disabled } = this.props;
    return (
      <button type="button" onClick={ onClick } disabled={ disabled }>
        { text }
      </button>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.func,
  text: PropTypes.string.isRequired,
};

Button.defaultProps = {
  disabled: null,
};
