import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
  render() {
    const { nameLabel, onClick, disabled, onKeyPress } = this.props;
    return (
      <button
        type="button"
        onClick={ onClick }
        disabled={ disabled }
        onKeyPress={ onKeyPress }
      >
        { nameLabel }
      </button>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  nameLabel: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onKeyPress: PropTypes.func,
};

Button.defaultProps = {
  disabled: false,
  onKeyPress: PropTypes.func,
};
