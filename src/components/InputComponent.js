import React from 'react';
import PropTypes from 'prop-types';

class InputComponent extends React.Component {
  render() {
    const { id, value, label, onchange } = this.props;
    return (
      <label htmlFor={ id }>
        {label}
        :
        <input value={ value } id={ id } onChange={ onchange } type="text" />
      </label>
    );
  }
}

InputComponent.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onchange: PropTypes.func.isRequired,
};

export default InputComponent;
