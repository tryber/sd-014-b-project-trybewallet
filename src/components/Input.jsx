import PropTypes from 'prop-types';
import React from 'react';

class Input extends React.Component {
  render() {
    const { id, type, name, label, value, onChange, className } = this.props;
    return (
      <label htmlFor={ id }>
        {label}
        <input
          id={ id }
          type={ type }
          name={ name }
          value={ value }
          onChange={ onChange }
          className={ className }
        />
      </label>
    );
  }
}

Input.defaultProps = {
  type: 'text',
  className: '',
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  value: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default Input;
