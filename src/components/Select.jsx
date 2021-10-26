import React, { Component } from 'react';
import PropTypes from 'prop-types';
import labelTranslate from '../helpers/translate';

export default class Select extends Component {
  constructor() {
    super();

    this.capitalize = this.capitalize.bind(this);
  }

  // Função vista em: https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript
  capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  render() {
    const { name, options, onChange } = this.props;
    return (
      <label htmlFor={ name }>
        { labelTranslate(name) }
        <select name={ name } id={ name } onChange={ onChange }>
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
  onChange: PropTypes.func.isRequired,
};
