import PropTypes from 'prop-types';
import React from 'react';

class Button extends React.Component {
  render() {
    const { testid, label, onClick, disabled } = this.props;
    return (
      <button
        data-testid={ testid }
        type="button"
        onClick={ onClick }
        disabled={ disabled }
      >
        {label}
      </button>

    );
  }
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default Button;
