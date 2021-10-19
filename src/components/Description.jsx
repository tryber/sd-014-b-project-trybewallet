import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Description extends Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label htmlFor="description">
        Descrição:
        <input
          type="text"
          name="description"
          id="description"
          value={ value }
          onChange={ (event) => handleChange(event) }
        />
      </label>
    );
  }
}

Description.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Description;
