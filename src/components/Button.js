import PropTypes from 'prop-types';
import React from 'react';

class Button extends React.Component {
  render() {
    const { id, label, disabled, onClick } = this.props;
    return (
      <div>
        <button type="submit" id={ id } disabled={ disabled } onClick={ onClick }>
          { label }
        </button>
      </div>
    );
  }
}

Button.propTypes = {
  disabled: PropTypes.isRequired,
  id: PropTypes.isRequired,
  label: PropTypes.isRequired,
  onClick: PropTypes.isRequired,
};

export default Button;
