import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { title, handleClick } = this.props;
    return(
      <button 
        type="button"
        onClick={ handleClick }
      >
        {title}

      </button>
    );
  }
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;