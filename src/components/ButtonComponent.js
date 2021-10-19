import React from 'react';
import PropTypes from 'prop-types';

class ButtonComponent extends React.Component {
  render() {
    const { id = null, text, onClick, datatestid = null } = this.props;
    return (
      <button
        id={ id }
        onClick={ onClick }
        data-testid={ datatestid }
        type="button"
      >
        { text }
      </button>
    );
  }
}

ButtonComponent.propTypes = {
  id: PropTypes.number,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  datatestid: PropTypes.string,
};

ButtonComponent.defaultProps = {
  id: null,
  datatestid: null,
};

export default ButtonComponent;
