import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { resultApi, resultApiExpenses } from '../actions';
import Button from '../components/Button';
import Select from '../components/Select';
import Input from '../components/Input';
import TextArea from '../components/TextArea';

const methodPg = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const typeTag = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleCLick = this.handleCLick.bind(this);
  }

  componentDidMount() {
    const { armazeApiEstadoGlobal } = this.props;
    armazeApiEstadoGlobal();
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleCLick() {
    const { armazenaApiExpense } = this.props;
    this.setState((prevState) => ({ id: prevState.id + 1 }));
    armazenaApiExpense(this.state);
  }

  forms() {
    const { currencies } = this.props;
    const { value, description, currency, method, tag } = this.state;
    return (
      <form>
        <Input
          label="Valor:"
          type="text"
          id="addValue"
          value={ value }
          onChange={ this.handleChange }
          name="value"
        />
        <TextArea
          label="Descrição"
          id="description"
          value={ description }
          onChange={ this.handleChange }
          name="description"
        />
        <Select
          array={ currencies }
          label="Moeda"
          id="expense-currency"
          value={ currency }
          onChange={ this.handleChange }
          name="currency"
        />
        <Select
          array={ methodPg }
          label="Método de pagamento"
          value={ method }
          id="payment"
          onChange={ this.handleChange }
          name="method"
        />
        <Select
          array={ typeTag }
          label="Tag"
          id="tag"
          value={ tag }
          onChange={ this.handleChange }
          name="tag"
        />
        <Button label="Adicionar despesa" onClick={ this.handleCLick } />
      </form>
    );
  }

  render() {
    return (
      <div>
        <Header />
        { this.forms()}
      </div>
    );
  }
}

Wallet.propTypes = {
  currencies: PropTypes.func.isRequired,
  armazeApiEstadoGlobal: PropTypes.func.isRequired,
  armazenaApiExpense: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    currencies: state.wallet.currencies,
    exchange: state.wallet.exchange,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    armazeApiEstadoGlobal: () => dispatch(resultApi()),
    armazenaApiExpense: (state) => dispatch(resultApiExpenses(state)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
