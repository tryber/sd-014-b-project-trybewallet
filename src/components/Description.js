import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Description extends Component {
  render() {
    const { handleChange, description } = this.props;
    return (
      <label htmlFor="description">
        Descrição:
        <input
          value={ description }
          name="description"
          id="description"
          onChange={ (event) => handleChange(event) }
          type="text"
        />
      </label>
    );
  }
}

Description.propTypes = {
  description: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Description;
