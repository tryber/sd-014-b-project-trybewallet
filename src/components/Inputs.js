import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { type, name, label, onChange, value, id } = this.props;
    return (
      <label htmlFor={ id }>
        { label }
        <input
          type={ type }
          name={ name }
          value={ value }
          onChange={ onChange }
          id={ id }
        />
      </label>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  label: '',
  value: '',
  name: '',
  id: '',
  onChange: null,
};

export default Input;
