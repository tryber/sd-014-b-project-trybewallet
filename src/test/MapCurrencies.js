import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MapCurrencies extends Component {
  render() {
    const { dataArray, label, id, value, onChange } = this.props;
    return (
      <form className="input-info">
        <label htmlFor={ id }>
          { label }
          <select
            name={ id }
            id={ id }
            value={ value }
            onChange={ onChange }
          >
            { dataArray.map((item) => ( // data array será recebido como props no component de form = currenciesData
              <option key={ item }>
                {item}
              </option>
            )) }
          </select>
        </label>
      </form>
    );
  }
}

MapCurrencies.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  dataArray: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default MapCurrencies;
