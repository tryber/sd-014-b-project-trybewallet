import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const { name, title, values, onChange } = this.props;
    return (
      <label htmlFor={ name }>
        {title}
        <select name={ name } id={ name } onChange={ onChange }>
          {values
            .map((eachValue, i) => (
              <option
                key={ i }
                value={ eachValue }
              >
                { eachValue }
              </option>))}
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Select;
