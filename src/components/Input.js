import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { id, labelText, name, value, handleChange } = this.props;
    return (
      <div className="col">
        <label htmlFor={ id } className="form-label">
          { labelText }
        </label>
        <input
          className="form-control"
          id={ id }
          type="text"
          name={ name }
          value={ value }
          onChange={ handleChange }
        />
      </div>
    );
  }
}

Input.propTypes = {
  id: PropTypes.string,
  labelText: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
};

Input.defaultProps = {
  labelText: '',
  value: '',
  name: '',
  id: '',
  handleChange: null,
};

export default Input;
