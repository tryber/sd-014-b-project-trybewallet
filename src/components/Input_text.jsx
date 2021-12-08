import React from 'react';
import PropTypes from 'prop-types';


class InputText extends React.Component {
  render() {
    const { id, label, value, onChange, name, onBlur } = this.props;
    return(
      <label htmlFor={ id } className="m-0">
        { label }
        <input
          className="input-form"
          value={ value }
          id={ id }
          onChange={ onChange }
          onBlur={ onBlur }
          name={ name }
          type="text" 
        />
      </label>

    );
  }
}

InputText.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
};

export default InputText;