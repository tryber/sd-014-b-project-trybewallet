import React from 'react';
import PropTypes from 'prop-types';

function Select({ id, textLabel, className, options }) {
  return (
    <label htmlFor={ id }>
      { textLabel }
      <select className={ className } id={ id }>
        {
          options.map((option) => (
            <option key={ option }>
              { option }
            </option>
          ))
        }
      </select>
    </label>
  );
}

Select.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  textLabel: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
};

Select.defaultProps = {
  options: [],
  className: '',
};

export default Select;
