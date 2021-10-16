import React from 'react';

class SelectOptions extends React.Component {
  render() {
    return (
      <>
        <option value="food">Alimentação</option>
        <option value="fun">Lazer</option>
        <option value="work">Trabalho</option>
        <option value="transport">Transporte</option>
        <option value="health">Saúde</option>
      </>
    );
  }
}

export default SelectOptions;
