import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from './Input';
import MetdPagamento from './MetdPagamento';
import TiposDeGastos from './TiposDeGastos';
import SelectCoin from './SelectCoin';
import { expensesAction, fetchApiThunk } from '../actions';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      id: -1,
      valor: '0',
      descricao: '',
      moeda: 'USD',
      metdPagamento: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: {},
      expenses: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.addExpenses = this.addExpenses.bind(this);
    // this.somatoriaDespesas = this.somatoriaDespesas.bind(this);
  }

  componentDidMount() {
    // this.fetchApi();
    const { requisicaoApi } = this.props;
    requisicaoApi();
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  async addExpenses() {
    const { actionExpenses, requisicaoApi } = this.props;
    const newReqApi = await requisicaoApi();
    this.setState((state) => ({
      id: state.id + 1,
      exchangeRates: newReqApi.payload,
    }));
    this.setState((state) => ({
      expenses: [...state.expenses, {
        id: state.id,
        value: state.valor,
        description: state.descricao,
        currency: state.moeda,
        method: state.metdPagamento,
        tag: state.tag,
        exchangeRates: state.exchangeRates,
      }],
    }));
    const { expenses } = this.state;
    actionExpenses(expenses);
  }

  render() {
    const { valor, descricao, moeda,
      metdPagamento, tag } = this.state;
    const { currencies } = this.props;
    return (
      <form>
        <Input
          htmlFor="valor"
          labelText="Valor"
          type="number"
          id="valor"
          name="valor"
          value={ valor }
          onChange={ this.handleChange }
        />
        <Input
          htmlFor="descricao"
          labelText="Descrição"
          type="text"
          id="descricao"
          name="descricao"
          value={ descricao }
          onChange={ this.handleChange }
        />
        <SelectCoin
          objFetch={ currencies }
          value={ moeda }
          onChange={ this.handleChange }
        />
        <MetdPagamento
          value={ metdPagamento }
          onChange={ this.handleChange }
        />
        <TiposDeGastos
          value={ tag }
          onChange={ this.handleChange }
        />
        <button type="button" onClick={ this.addExpenses }>Adicionar despesa</button>
      </form>
    );
  }
}

Form.propTypes = {
  actionExpenses: PropTypes.func.isRequired,
  requisicaoApi: PropTypes.func.isRequired,
  currencies: PropTypes.objectOf(PropTypes.object).isRequired,
  // despesas: PropTypes.arrayOf(PropTypes.shape({
  //   id: PropTypes.number,
  //   value: PropTypes.string,
  //   description: PropTypes.string,
  //   currency: PropTypes.string,
  //   method: PropTypes.string,
  //   tag: PropTypes.string,
  //   exchangeRate: PropTypes.objectOf(PropTypes.object),
  // })).isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  despesas: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  actionExpenses: (state) => dispatch(expensesAction(state)),
  requisicaoApi: (state) => dispatch(fetchApiThunk(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
