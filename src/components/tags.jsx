import React from 'react';

class Tags extends React.Component {
  render() {
    return (
      <label htmlFor="tag">
        tag:
        <select id="tag">
          <option value="food">Alimentação</option>
          <option value="lazer">Lazer</option>
          <option value="job">Trabalho</option>
          <option value="transport">Transporte</option>
          <option value="health">Saúde</option>
        </select>
      </label>
    );
  }
}
export default Tags;
