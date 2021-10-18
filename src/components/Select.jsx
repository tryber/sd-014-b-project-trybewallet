import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Select extends Component {
  render() {
    const { name, labelText, options } = this.props;
    return (
      <label htmlFor={ name }>
        { labelText }
        <select id={ name }>
          { options.map((oneOption, index) => (
            <option
              key={ index }
              value={ oneOption }
            >
              { oneOption }
            </option>)) }
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
};
