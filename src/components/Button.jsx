import PropTypes from 'prop-types';
import React, { Component } from 'react';

export class Button extends Component {
  render() {
    const { onClick, disabled, value } = this.props;
    return (
      <div>
        <input
          type="submit"
          disabled={ disabled }
          onClick={ onClick }
          value={ value }
        />
      </div>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Button;
