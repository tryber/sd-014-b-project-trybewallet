import React from 'react';

function TagLabel() {
  return (
    <label htmlFor="tag">
      <select id="tag">
        <option value="food">Alimentação</option>
        <option value="lazer">Lazer</option>
        <option value="trabalho">Trabalho</option>
        <option value="transporte">Transporte</option>
        <option value="saude">Saúde</option>
      </select>
      Tag
    </label>
  );
}

export default TagLabel;
