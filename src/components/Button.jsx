import React from 'react';
import PropTypes from 'prop-types';

class ButtonComponent extends React.Component {
  render() {
    const { title, handleClick, testId, buttonClass } = this.props;
    return(
      <button
        title={ <i className="bi bi-dash-circle" /> }
        className={ buttonClass }
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
  title: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  testId: PropTypes.string,
  buttonClass: PropTypes.string,
};

ButtonComponent.defaultProps = {
  testId: 'btn'
};

export default ButtonComponent;