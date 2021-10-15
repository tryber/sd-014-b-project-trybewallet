import PropTypes from 'prop-types';
import React from 'react';

class Button extends React.Component {
  render() {
    const { testid, label } = this.props;
    return (
      <button
        data-testid={ testid }
        type="submit"
      >
        {label}
      </button>

    );
  }
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
};

export default Button;
