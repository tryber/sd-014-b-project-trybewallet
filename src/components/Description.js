import React, { Component } from 'react';

class Description extends Component {
  render() {
    const { handleChange, description } = this.props;
    return (
      <label htmlFor="value">
        Descrição:
        <input value={ description } onChange={ (event) => handleChange(event) } type="text" />
      </label>
    );
  }
}

export default Description;
