import React from 'react';
import PropTypes from 'prop-types';

function SelectGenerator(props) {
  const { name, option } = props;
  return (
    <label className="form-label" htmlFor={ name }>
      { name }
      <select
        name={ name }
        id={ name }
        className="form-select"
      >
        { option.map((element, index) => (
          <option
            key={ index + 1 }
            value={ element }
          >
            {element}
          </option>
        ))}
      </select>
    </label>
  );
}

SelectGenerator.propTypes = {
  name: PropTypes.string.isRequired,
  option: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SelectGenerator;
