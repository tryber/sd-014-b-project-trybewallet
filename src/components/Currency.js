import React, { Component } from 'react';

class Currency extends Component {
  render() {
    return (
      <label htmlFor="currency">
        Moeda:
        <select id="currency" name="currency">
          <option>Escolha</option>
        </select>
      </label>
    );
  }
}

export default Currency;
