import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from './Header';
import InputText from './InputText';
import SelectMoeda from './SelectMoeda';
import SelectMetodoDePagamento from './SelectMetodoDePagamento';
import SelectTagDespesa from './SelectTagDespesa';
import Tabela from './Tabela';
import { coins } from '../actions';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { informacoesMoeda, numExpenses, objectInfor } = this.props;
    informacoesMoeda({ id: numExpenses.length, ...objectInfor });
  }

  render() {
    return (
      <section>
        <Header />
        <form>
          <InputText labelName="Valor" />
          <InputText labelName="Descrição" />
          <SelectMoeda />
          <SelectMetodoDePagamento />
          <SelectTagDespesa />
        </form>
        <button onClick={ this.onClick } type="button">Adicionar despesa</button>
        <Tabela />
      </section>
    );
  }
}

Wallet.propTypes = {
  informacoesMoeda: PropTypes.func.isRequired,
  numExpenses: PropTypes.arrayOf().isRequired,
  objectInfor: PropTypes.shape().isRequired,
};

const mapStateToProps = (state) => ({
  numExpenses: state.wallet.expenses,
  objectInfor: state.addExpeses,
});

const mapDispatchToProps = (dispatch) => ({
  informacoesMoeda: (obj) => dispatch(coins(obj)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
