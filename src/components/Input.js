import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { id, label, name, onChange, placeholder, type, value } = this.props;
    return (
      <label htmlFor={ name }>
        { label }
        <input
          data-testid={ id }
          name={ name }
          onChange={ onChange }
          placeholder={ placeholder }
          type={ type }
          value={ value }
        />
      </label>
    );
  }
}

export default connect()(Input);

Input.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

Input.defaultProps = {
  id: '',
  label: '',
};
