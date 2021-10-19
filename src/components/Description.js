import React, { Component } from 'react';

class Description extends Component {
  render() {
    const { handleChange, description } = this.props;
    return (
      <label htmlFor="value">
        Descrição:
        <input
          value={ description }
          name="description"
          onChange={ (event) => handleChange(event) }
          type="text"
        />
      </label>
    );
  }
}

Description.propTypes = {
  description: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Description;
