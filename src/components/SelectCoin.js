import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectCoin extends Component {
  render() {
    const { objFetch } = this.props;
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

SelectCoin.propTypes = {
  objFetch: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default SelectCoin;
