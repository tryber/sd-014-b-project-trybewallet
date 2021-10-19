import React from 'react';

class HeaderTableOfCost extends React.Component {
  render() {
    return (
      <header className="header-table-costs">
        <h6 className="h6-table">Descrição</h6>
        <h6 className="h6-table">Tag</h6>
        <h6 className="h6-table">Método de pagamento</h6>
        <h6 className="h6-table">Valor</h6>
        <h6 className="h6-table">Moeda</h6>
        <h6 className="h6-table">Câmbio utilizado</h6>
        <h6 className="h6-table">Valor convertido</h6>
        <h6 className="h6-table">Moeda de conversão</h6>
        <h6 className="h6-table">Editar/Excluir</h6>
      </header>
    );
  }
}

export default HeaderTableOfCost;
