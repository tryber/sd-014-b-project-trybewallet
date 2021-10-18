import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CustomInput extends Component {
  render() {
    const { describe, id, onChange, dataTestId, type } = this.props;
    return (
      <label htmlFor={ id }>
        {describe}
        <input
          onChange={ onChange }
          data-testid={ dataTestId }
          name={ id }
          type={ type }
          id={ id }
        />
      </label>
    );
  }
}

CustomInput.propTypes = {
  dataTestId: PropTypes.string,
  describe: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

CustomInput.defaultProps = {
  dataTestId: '',
};
