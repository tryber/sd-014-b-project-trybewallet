import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { type,
      name,
      label,
      onChange,
      value,
      id,
      placeholder,
      datatestid } = this.props;
    return (
      <div>
        <label htmlFor={ name }>
          {label}
          <input
            data-testid={ datatestid }
            type={ type }
            name={ name }
            label={ label }
            onChange={ onChange }
            value={ value }
            id={ id }
            placeholder={ placeholder }
            required
          />
        </label>
      </div>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  datatestid: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  id: PropTypes.string,
};

Input.defaultProps = {
  type: PropTypes.string,
  name: PropTypes.string,
  datatestid: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  id: PropTypes.string,
};

export default Input;
