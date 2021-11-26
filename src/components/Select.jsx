import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { id, label, value, onChange, options, name } = this.props;
    return(
      <label htmlFor={ id }>
        { label }
        :
        <select
          value={ value }
          id={ id }
          name={ name }
          onChange={ onChange } 
        >
          {options.map((option) => 
            <option key={ option } value={ option }>{ option }</option>)}
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Select;