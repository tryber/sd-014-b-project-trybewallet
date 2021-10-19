import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {
  render() {
    const {
      dataTestid,
      type,
      name,
      labelName,
      onChange,
      value,
      id,
      placeholder,
    } = this.props;
    return (
      <label htmlFor={ name }>
        { labelName }
        <input
          data-testid={ dataTestid }
          type={ type }
          name={ name }
          value={ value }
          onChange={ onChange }
          id={ id }
          placeholder={ placeholder }
        />
      </label>
    );
  }
}

Input.propTypes = {
  dataTestid: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  labelName: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  labelName: '',
  value: '',
  name: '',
  id: '',
  placeholder: '',
  onChange: null,
};

// Referencia: exercício de forms redux (https://github.com/tryber/exercise-forms-redux/blob/gabarito/src/components/Input.jsx)
