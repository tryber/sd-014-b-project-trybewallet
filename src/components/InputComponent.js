import React from 'react';
import PropTypes from 'prop-types';

class InputComponent extends React.Component {
  render() {
    const { id, value, label, onChange, type = 'text' } = this.props;
    return (
      <label htmlFor={ id }>
        {label}
        :
        <input value={ value } id={ id } onChange={ onChange } type={ type } />
      </label>
    );
  }
}

InputComponent.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

InputComponent.defaultProps = {
  type: 'text',
};

export default InputComponent;
