import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const {
      id,
      label,
      name,
      onChange,
      value,
      defaultOption,
      defaultValue,
      options,
    } = this.props;

    return (
      <label htmlFor={ id }>
        { label }
        <select
          name={ name }
          id={ id }
          required
          onChange={ onChange }
          value={ value }
        >
          <option value={ defaultValue }>{ defaultOption }</option>
          {
            options.map((option, index) => (
              <option key={ index }>{ option }</option>
            ))
          }
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  defaultOption: PropTypes.string,
};

Select.defaultProps = {
  id: '',
  label: '',
  name: '',
  value: '',
  defaultValue: '',
  defaultOption: '',
};

export default Select;
