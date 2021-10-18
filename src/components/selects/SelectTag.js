import React from 'react';

class SelectTag extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="tag">
          Tag
          <select id="tag">
            <option value="meal">Alimentação</option>
            <option value="hobbie">lazer</option>
            <option value="work">Trabalho</option>
            <option value="transport">Transporte</option>
            <option value="health">Saúde</option>
          </select>
        </label>
      </div>
    );
  }
}

export default SelectTag;
