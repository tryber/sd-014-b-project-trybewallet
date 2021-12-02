import React from 'react';
import PropTypes from 'prop-types';

class ButtonComponent extends React.Component {
  render() {
    const { title, handleClick, testId, buttonClass, isDisable } = this.props;
    return(
      <button
        title={ <i className="bi bi-dash-circle" /> }
        className={ buttonClass }
        type="button"
        onClick={ handleClick }
        data-testid={ testId }
        disabled={ isDisable }
      >
        {title}

      </button>
    );
  }
}



ButtonComponent.propTypes = {
  title: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  testId: PropTypes.string,
  buttonClass: PropTypes.string,
  isDisable: PropTypes.bool,
};

ButtonComponent.defaultProps = {
  testId: 'btn'
};

export default ButtonComponent;