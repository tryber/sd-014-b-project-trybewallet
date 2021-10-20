import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { text, type, testId } = this.props;
    return (
      <input type={ type } data-testid={ testId } placeholder={ text } />
    );
  }
}

Input.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
};

export default Input;
