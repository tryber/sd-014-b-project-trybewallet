import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TabelaTbody from './TabelaTbody';

class Tabela extends React.Component {
  render() {
    const { inforTabela } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          { inforTabela.map((element, index) => (<TabelaTbody
            key={ index }
            object={ element }
          />))}
        </tbody>
      </table>
    );
  }
}

Tabela.propTypes = {
  inforTabela: PropTypes.arrayOf().isRequired,
};

const mapStateToProps = (state) => ({
  inforTabela: state.wallet.expenses,
});

export default connect(mapStateToProps)(Tabela);
