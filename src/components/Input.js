import PropTypes from 'prop-types';
import React from 'react';

class Input extends React.Component {
  render() {
    const { type, name, placeholder, id, value, onChange, label } = this.props;
    return (
      <div>
        <label htmlFor={ name }>
          { label }
          <input
            type={ type }
            id={ name }
            name={ name }
            data-testid={ id }
            value={ value }
            onChange={ onChange }
            placeholder={ placeholder }
          />
        </label>
      </div>
    );
  }
}

Input.propTypes = {
  id: PropTypes.isRequired,
  label: PropTypes.isRequired,
  name: PropTypes.isRequired,
  onChange: PropTypes.isRequired,
  placeholder: PropTypes.isRequired,
  type: PropTypes.isRequired,
  value: PropTypes.isRequired,
};

export default Input;
