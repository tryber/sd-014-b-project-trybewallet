import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectCoin extends Component {
  render() {
    const { value, objFetch } = this.props;
    return (
      <label htmlFor="moeda">
        Moeda
        <select
          name="moeda"
          id="moeda"
        >
          { Object.keys(objFetch).filter((chave) => chave !== 'USDT').map((item) => (
            <option
              key={ item }
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

SelectCoin.propTypes = {
  objFetch: PropTypes.objectOf(PropTypes.object).isRequired,
  value: PropTypes.string.isRequired,
};

export default SelectCoin;
