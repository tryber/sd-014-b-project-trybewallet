import React, { Component } from 'react';

export default class Tag extends Component {
  render() {
    return (
      <label htmlFor="tag">
        Tag:
        <select id="tag" name="tag">
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>
      </label>
    );
  }
}
