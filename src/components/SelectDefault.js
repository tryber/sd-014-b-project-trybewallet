import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class SelectDefault extends Component {
  render() {
    const { name, options, children, onChange } = this.props;
    return (
      <label htmlFor={ `${name}-input` }>
        { children }
        <select
          name="currency"
          id={ `${name}-input` }
          onChange={ onChange }
        >
          { options.map((option) => (
            <option
              key={ option }
              value={ option }
            >
              { option }
            </option>))}
        </select>
      </label>
    );
  }
}

SelectDefault.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  children: PropTypes.string.isRequired,
};
