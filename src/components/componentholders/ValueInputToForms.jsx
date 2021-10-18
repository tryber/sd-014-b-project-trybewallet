import React from 'react';
import PropTypes from 'prop-types';

class ValueInputToForms extends React.Component {
  render() {
    const { onChange, value } = this.props;
    return (
      <label htmlFor="value-form-label">
        Valor
        <input
          type="text"
          name="value"
          id="value-form-label"
          onChange={ onChange }
          value={ value }
        />
      </label>
    );
  }
}

ValueInputToForms.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default ValueInputToForms;
