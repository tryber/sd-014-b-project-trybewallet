import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from '../components/Input';
import Header from '../components/Header';
import TextArea from '../components/TextArea';
import { resultAPI, currenciResult } from '../actions';
import Select from '../components/Select';
import DataTable from '../components/DataTable';

const metodoPagamento = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const category = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: '0',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.renderInput = this.renderInput.bind(this);
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  handleClick() {
    const { setExpenses } = this.props;
    this.setState((prev) => ({
      id: prev.id + 1,
    }));
    setExpenses(this.state);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
    console.log(name, value);
  }

  renderInput() {
    const { value, description } = this.state;
    return (
      <>
        <Input
          label="Valor"
          id="Valor"
          type="text"
          name="value"
          value={ value }
          onChange={ this.handleChange }
        />
        <TextArea
          label="Descrição"
          id="description"
          name="description"
          value={ description }
          onChange={ this.handleChange }
        />
      </>);
  }

  render() {
    const { currency, method, tag } = this.state;
    const { currencies } = this.props;
    return (
      <div>
        <Header />
        <form>
          {this.renderInput()}
          <Select
            array={ currencies }
            label="Moeda"
            id="moeda"
            name="currency"
            value={ currency }
            onChange={ this.handleChange }
          />
          <Select
            array={ metodoPagamento }
            label="Método de pagamento"
            id="method"
            name="method"
            value={ method }
            onChange={ this.handleChange }
          />
          <Select
            array={ category }
            label="Tag"
            id="tag"
            name="tag"
            value={ tag }
            onChange={ this.handleChange }
          />
        </form>
        <button type="button" onClick={ this.handleClick }>Adicionar despesa</button>
        <DataTable />
      </div>);
  }
}

Wallet.propTypes = {
  getCurrencies: PropTypes.func.isRequired,
  setExpenses: PropTypes.func.isRequired,
  currencies: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(currenciResult()),
  setExpenses: (state) => dispatch(resultAPI(state)),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
