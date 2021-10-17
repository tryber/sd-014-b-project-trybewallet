import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TiposDeGastos extends Component {
  render() {
    const arrayOption = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const { value } = this.props;
    return (
      <label htmlFor="Tag">
        Tag
        <select
          name="Tag"
          id="Tag"
        >
          { arrayOption.map((item, index) => (
            <option
              key={ index }
              value={ value }
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
  // onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default TiposDeGastos;
