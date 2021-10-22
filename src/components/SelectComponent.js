import React from 'react';
import PropTypes from 'prop-types';

class SelectComponent extends React.Component {
  render() {
    const { id, value, label, onChange, options } = this.props;
    return (
      <label htmlFor={ id }>
        { label }
        :
        <select value={ value } onChange={ onChange } id={ id }>
          {options.map(
            (option) => <option value={ option } key={ option }>{option}</option>,
          )}
        </select>
      </label>
    );
  }
}

SelectComponent.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SelectComponent;
