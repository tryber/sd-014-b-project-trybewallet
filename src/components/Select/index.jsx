import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Select extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { onChange } = this.props;
    onChange(event);
  }

  render() {
    const { id, value, options, children } = this.props;
    return (
      <div>
        <label htmlFor={ id }>
          { children }
          <select name={ id } id={ id } value={ value } onChange={ this.handleChange }>
            {
              options.map(({ optionValue, name }) => (
                <option key={ optionValue } value={ optionValue }>{ name }</option>))
            }
          </select>
        </label>
      </div>
    );
  }
}

Select.propTypes = {
  children: PropTypes.string,
  id: PropTypes.number,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.object),
  value: PropTypes.string,
}.isRequired;
