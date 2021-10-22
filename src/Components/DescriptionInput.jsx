import React, { Component } from 'react';

class DescriptionInput extends Component {
  render() {
    return (
      <label htmlFor="description">
        Descrição:
        <input type="text" name="description" />
      </label>
    );
  }
}

export default DescriptionInput;
