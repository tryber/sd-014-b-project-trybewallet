import React from 'react';
import PropTypes from 'prop-types';

class ButtonComponent extends React.Component {
  render() {
    const { title, handleClick, testId } = this.props;
    return(
      <button 
        type="button"
        onClick={ handleClick }
        data-testid={ testId }
      >
        {title}

      </button>
    );
  }
}



ButtonComponent.propTypes = {
  title: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  testId: PropTypes.string,
};

ButtonComponent.defaultProps = {
  testId: 'btn'
};

export default ButtonComponent;