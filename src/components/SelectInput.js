import PropTypes from 'prop-types';
import React from 'react';

export default class SelectInput extends React.Component {
  generateSelectOptionsFromArray(array) {
    return array.map(
      (element, index) => <option key={ index }>{element}</option>,
    );
  }

  render() {
    const { label, name, value, options, onChange, ...attributes } = this.props;

    return (
      <label htmlFor={ name }>
        {`${label}: `}
        <select
          name={ name }
          id={ name }
          value={ value }
          onChange={ (event) => onChange(event) }
          { ...attributes }
        >
          { this.generateSelectOptionsFromArray(options) }
        </select>
        {' '}
      </label>
    );
  }
}

SelectInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
};
