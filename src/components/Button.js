import PropTypes from 'prop-types';
import React from 'react';

class Button extends React.Component {
  render() {
    const { id, label } = this.props;
    return (
      <div>
        <button type="submit" id={ id }>
          { label }
        </button>
      </div>
    );
  }
}

Button.propTypes = {
  id: PropTypes.isRequired,
  label: PropTypes.isRequired,
};

export default Button;
