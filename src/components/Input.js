import PropTypes from 'prop-types';
import React from 'react';

export default class Input extends React.Component {
  render() {
    const { type = 'text', label, name, value, onChange, ...attributes } = this.props;

    return (
      <label htmlFor={ name }>
        {`${label}: `}
        <input
          type={ type }
          name={ name }
          id={ name }
          value={ value }
          onChange={ (event) => onChange(event) }
          { ...attributes }
        />
        {' '}
      </label>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  type: 'text',
};
