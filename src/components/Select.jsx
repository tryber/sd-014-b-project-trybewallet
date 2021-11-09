import React from 'react';
import PropTypes from 'prop-types';

function Select(props) {
  const { id, label, value, info, onChange } = props;
  return (
    <label htmlFor={ id }>
      { label }
      <select
        id={ id }
        value={ value }
        onChange={ onChange }
      >
        { info.map((element) => 
          <option key={ element } value={ element }>{ element }</option>)}
      </select>
    </label>
  );
}

Select.propTypes = {
  info: PropTypes.shape({
    map: PropTypes.func,
  }).isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Select;
