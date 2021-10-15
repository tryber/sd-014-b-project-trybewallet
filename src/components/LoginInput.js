/* import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputText extends Component {
  render() {
    const { nome, email, password, label, type, onChange } = this.props;
    return (
      <label htmlFor={ nome }>
        { label }
        <input
          type={ type }
          value={ email }
          name={ nome }
          onChange={ onChange }
        />
      </label>
    );
  }
}

InputText.propTypes = {
  type: PropTypes.string.isRequired,
  nome: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func,
};

InputText.defaultProps = {
  label: '',
  onChange: null,
};
 */
