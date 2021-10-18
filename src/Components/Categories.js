import React from 'react';

class Categories extends React.Component {
  render() {
    return (
      <label htmlFor="cat">
        Tag
        <select id="cat">
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

export default Categories;
