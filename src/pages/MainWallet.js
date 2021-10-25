import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFetch, saveState } from '../actions';

class MainWallet extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      valor: '',
      descricao: '',
      moeda: 'USD',
      pagamento: 'Cash',
      despesa: 'Trabalho',
    };
    this.handleChange = this.handleChange.bind(this);
    this.addDespesa = this.addDespesa.bind(this);
  }

  componentDidMount() {
    const { getFetchCurrencie } = this.props;
    getFetchCurrencie();
  }

  handleChange({ target: { id, value } }) {
    this.setState({ [id]: value });
  }

  addDespesa(APIresult) {
    const { id, valor, descricao, moeda,
      pagamento, despesa } = this.state;
    const { saveStateRedux, getFetchCurrencie } = this.props;
    getFetchCurrencie();
    this.setState({
    //   expenses: [...expenses, {
      id,
    //     value: valor,
    //     description: descricao,
    //     currency: moeda,
    //     method: pagamento,
    //     tag: despesa,
    //     exchangeRates: APIresult,
    //   }],
    });
    const expenses = {
      id,
      value: valor,
      description: descricao,
      currency: moeda,
      method: pagamento,
      tag: despesa,
      exchangeRates: APIresult,
    };
    saveStateRedux(expenses);
    this.setState({ id: id + 1 });
  }

  render() {
    const { currencies, APIresult } = this.props;
    return (
      <div>
        <label htmlFor="valor">
          Valor
          <input type="text" id="valor" onChange={ this.handleChange } />
        </label>
        <label htmlFor="descricao">
          Descrição
          <input type="text" id="descricao" onChange={ this.handleChange } />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select id="moeda" onChange={ this.handleChange }>
            { currencies.map((currencie) => (
              <option key={ currencie } value={ currencie }>{ currencie }</option>))}
          </select>
        </label>
        <label htmlFor="pagamento">
          Método de pagamento
          <select id="pagamento" onChange={ this.handleChange }>
            <option key="cash" value="Dinheiro">Dinheiro</option>
            <option key="credito" value="Cartão de crédito">Cartão de crédito</option>
            <option key="debito" value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="despesa">
          Tag
          <select id="despesa" onChange={ this.handleChange }>
            <option key="alimentacao" value="Alimentação">Alimentação</option>
            <option key="lazer" value="Lazer">Lazer</option>
            <option key="trabalho" value="Trabalho">Trabalho</option>
            <option key="transporte" value="Transporte">Transporte</option>
            <option key="saude" value="Saúde">Saúde</option>
          </select>
        </label>
        <button
          type="button"
          id="add-despesa"
          onClick={ () => this.addDespesa(APIresult) }
        >
          Adicionar Despesa
        </button>
      </div>
    );
  }
}

MainWallet.propTypes = {
  APIresult: PropTypes.objectOf(PropTypes.any).isRequired,
  currencies: PropTypes.arrayOf(PropTypes.any).isRequired,
  getFetchCurrencie: PropTypes.func.isRequired,
  saveStateRedux: PropTypes.func.isRequired,
};

const mapState = ({ wallet }) => ({
  currencies: wallet.currencies,
  APIresult: wallet.APIresult,
});

const mapDispatch = (dispatch) => ({
  getFetchCurrencie: () => dispatch(getFetch()),
  saveStateRedux: (payload) => dispatch(saveState(payload)),
});

export default connect(mapState, mapDispatch)(MainWallet);
