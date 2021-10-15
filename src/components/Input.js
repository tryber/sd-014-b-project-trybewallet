import PropTypes from 'prop-types';
import React from 'react';

class Input extends React.Component {
  render() {
    const { type, name, placeholder, id, value, onChange } = this.props;
    return (
      <div>
        <input
          type={ type }
          name={ name }
          data-testid={ id }
          value={ value }
          onChange={ onChange }
          placeholder={ placeholder }
        />
      </div>
    );
  }
}

Input.propTypes = {
  id: PropTypes.isRequired,
  name: PropTypes.isRequired,
  onChange: PropTypes.isRequired,
  placeholder: PropTypes.isRequired,
  type: PropTypes.isRequired,
  value: PropTypes.isRequired,
};

export default Input;
