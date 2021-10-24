import React, { Component } from 'react';

class DescriptionInput extends Component {
  render() {
    return (
      <label htmlFor="description">
        Descrição
        <input type="text" id="description" name="description-input" />
      </label>
    );
  }
}

export default DescriptionInput;
