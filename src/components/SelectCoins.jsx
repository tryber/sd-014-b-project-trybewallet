import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectCoins extends Component {
  render() {
    const { labelhtmlfor, description, currencies, value, onChange } = this.props;
    return (
      <section>
        <label htmlFor={ labelhtmlfor }>
          { description }
          <select
            id={ labelhtmlfor }
            name="currency"
            value={ value }
            onChange={ onChange }
          >
            {
              currencies.map((category) => (
                <option key={ category }>{ category }</option>
              ))
            }
          </select>
        </label>
      </section>
    );
  }
}

SelectCoins.propTypes = {
  labelhtmlfor: PropTypes.string,
  description: PropTypes.string,
}.isRequired;

export default SelectCoins;
