import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
  render() {
    const { text, onClick, disabled, dataTestid } = this.props;
    return (
      <button
        data-testid={ dataTestid }
        type="button"
        onClick={ onClick }
        disabled={ disabled }
      >
        { text }
      </button>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.func,
  text: PropTypes.string.isRequired,
  dataTestid: PropTypes.string,
};

Button.defaultProps = {
  disabled: null,
  dataTestid: '',
};
