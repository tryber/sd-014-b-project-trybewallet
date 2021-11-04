import React, { Component } from 'react';

class Select extends Component {
  render() {
    return (
      <section>
        <label htmlFor="tag">
          Tag
          <select id="tag">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </section>
    );
  }
}

export default Select;
