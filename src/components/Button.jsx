import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { name, onHandleClick, disabled } = this.props;
    return (
      <button type="button" onClick={ onHandleClick } disabled={ disabled }>
        {name}
      </button>
    );
  }
}

Button.propTypes = {
  name: PropTypes.string,
  onHandleClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  name: 'Enviar',
  disabled: false,
};

export default Button;
