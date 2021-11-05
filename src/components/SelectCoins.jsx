import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectCoins extends Component {
  render() {
    const { labelhtmlfor, description, currencies } = this.props;
    return (
      <section>
        <label htmlFor={ labelhtmlfor }>
          { description }
          <select id={ labelhtmlfor }>
            {
              currencies.map((category, index) => (
                <option key={ index }>{ category }</option>
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
