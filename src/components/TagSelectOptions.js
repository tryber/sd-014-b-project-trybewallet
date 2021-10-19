import React from 'react';

class TagSelectOptions extends React.Component {
  render() {
    return (
      <>
        <option value="Alimentação">Alimentação</option>
        <option value="Lazer">Lazer</option>
        <option value="Trabalho">Trabalho</option>
        <option value="Transporte">Transporte</option>
        <option value="Saúde">Saúde</option>
      </>
    );
  }
}

export default TagSelectOptions;
