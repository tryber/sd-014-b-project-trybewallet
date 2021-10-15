import React from 'react';
import PropTypes from 'prop-types';

function SelectGenerator(props) {
  const { name, option, handleChange, label, value } = props;
  return (
    <label className="form-label" htmlFor={ name }>
      { label }
      <select
        name={ name }
        id={ name }
        className="form-select"
        onChange={ handleChange }
        value={ value }
      >
        { option.map((element, index) => (
          <option key={ index + 1 } value={ element }>
            {element}
          </option>
        ))}
      </select>
    </label>
  );
}

SelectGenerator.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  option: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SelectGenerator;
