import PropTypes from 'prop-types';
import React from 'react';

class Input extends React.Component {
  render() {
    const { type, name, label, value, onChange, className } = this.props;
    return (
      <label htmlFor={ name }>
        {label}
        <input
          id={ name }
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
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  value: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default Input;
