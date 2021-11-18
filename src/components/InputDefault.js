import PropTypes from 'prop-types';
import React, { Component } from 'react';

class InputDefault extends Component {
  render() {
    const { desc, name, value, handleChange } = this.props;
    return (
      <label className="form-label m-1" htmlFor={ name }>
        { desc }
        <input
          id={ name }
          name={ name }
          value={ value }
          onChange={ handleChange }
          className="form-control"
        />
      </label>
    );
  }
}

InputDefault.propTypes = {
  desc: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default InputDefault;
