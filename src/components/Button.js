// este parte eu peguei do repositório de exercícios da Trybe
// Fonte: https://github.com/tryber/exercise-forms-redux/blob/gabarito/src/components/Button.jsx
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { label, onClick, disabled, className } = this.props;
    return (
      <button
        className={ className }
        type="button"
        onClick={ onClick }
        disabled={ disabled }
      >
        { label }
      </button>
    );
  }
}

export default Button;

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  disabled: 'disabled',
  className: '',
};
