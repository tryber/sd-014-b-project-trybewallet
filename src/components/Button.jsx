import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
  render() {
    const { disabled, onClick, label } = this.props;
    return (
      <button
        type="button"
        disabled={ disabled }
        onClick={ onClick }
      >
        { label }
      </button>
    );
  }
}

Button.propTypes = ({
  disabled: PropTypes.bool,
  label: PropTypes.string,
  onClick: PropTypes.func,
}).isRequired;
