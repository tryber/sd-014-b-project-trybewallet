import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Selects extends Component {
  render() {
    const { coins, handleChange, id, textLabel, nameSelect } = this.props;
    return (
      <label htmlFor={ id }>
        { textLabel }
        <select id={ id } onChange={ handleChange } name={ nameSelect }>
          {coins.map((coin, i) => (
            <option key={ i } value={ coin }>
              {coin}
            </option>
          ))}
        </select>
      </label>
    );
  }
}

Selects.propTypes = {
  coins: PropTypes.shape({
    map: PropTypes.func,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  textLabel: PropTypes.string.isRequired,
  nameSelect: PropTypes.string.isRequired,
};
