import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { type, name, label, onChange, value, id } = this.props;
    return (
      <label htmlFor={ id }>
        { label }
        <input
          id={ id }
          name={ name }
          type={ type }
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
};

Input.defaultProps = {
  id: '',
  type: 'text',
  label: '',
  name: '',
  value: '',
};

export default Input;
