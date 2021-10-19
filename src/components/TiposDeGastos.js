import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TiposDeGastos extends Component {
  render() {
    const arrayOption = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const { onChange } = this.props;
    return (
      <label htmlFor="tag">
        Tag
        <select
          name="tag"
          id="tag"
          onChange={ onChange }
        >
          { arrayOption.map((item, index) => (
            <option
              key={ index }
              value={ item }
            >
              { item }
            </option>
          ))}
        </select>

      </label>
    );
  }
}

TiposDeGastos.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default TiposDeGastos;
