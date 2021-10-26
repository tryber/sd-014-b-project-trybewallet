import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Currencies extends Component {
  render() {
    const { options, label, id, value, onChange: handleChange } = this.props;
    return (
      <form className="input-info">
        <label htmlFor={ id }>
          { label }
          <select
            name={ id }
            id={ id }
            value={ value }
            onChange={ handleChange }
          >
            { options.map((item) => (
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

Currencies.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default Currencies;
