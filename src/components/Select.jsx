import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <section>
        <label htmlFor="tag">
          Tag
          <select id="tag" name="description" value={ value } onChange={ onChange }>
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </section>
    );
  }
}

Select.propTypes = {
  labelhtmlfor: PropTypes.string,
  description: PropTypes.string,
  optionone: PropTypes.string,
  optiontwo: PropTypes.string,
  optionthree: PropTypes.string,
  optionfour: PropTypes.string,
  optionfive: PropTypes.string,
}.isRequired;

export default Select;
