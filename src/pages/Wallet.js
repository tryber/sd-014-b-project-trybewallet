import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Input from '../components/Input';
import Select from '../components/Select';
import SelectMoedas from '../components/SelectMoedas';
import { adicionarDespesa, apiExchange, somarValor } from '../actions/index';

class Wallet extends React.Component {
  constructor() {
    super();

    this.handleTextAreaChange = this.handleTextAreaChange.bind(this);

    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
    this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
  }

  handleTextAreaChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
    console.log(value);
  }

  async clicou() {
    const { adcDespesa } = this.props;
    const { value, description, currency, method, tag, id } = this.state;
    this.setState((prevState) => ({
      id: prevState.id + 1,
    }));
    const infDespesa = [{
      id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: await apiExchange(),
    }];
    adcDespesa(infDespesa);
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    const arrayMetodoDePagamento = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const arrayDeTag = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <main>
        <Header />
        <form>
          <Input
            label="Valor"
            value={ value }
            id="value"
            name="value"
            onChange={ this.handleTextAreaChange }
          />
          <Input
            label="descrição"
            value={ description }
            id="descrição"
            name="description"
            onChange={ this.handleTextAreaChange }
          />
          <SelectMoedas
            value={ currency }
            name="currency"
            onChange={ this.handleTextAreaChange }
          />
          <Select
            label="Método de pagamento"
            value={ method }
            id="metodoDePagamento"
            name="method"
            onChange={ this.handleTextAreaChange }
            options={ arrayMetodoDePagamento }
          />
          <Select
            label="tag"
            value={ tag }
            id="tag"
            name="tag"
            onChange={ this.handleTextAreaChange }
            options={ arrayDeTag }
          />
          <button type="button" onClick={ () => this.clicou() }>
            Adicionar despesa
          </button>
        </form>
      </main>
    );
  }
}

Wallet.propTypes = {
  adcDespesa: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  adcDespesa: (userInf) => (dispatch(adicionarDespesa(userInf))),
  somaTotal: (userInf) => (dispatch(somarValor(userInf))),
});

const mapstateToProps = (state) => (
  {
    despesaTotal: state.wallet.despesaTotal,
  });

export default connect(mapstateToProps, mapDispatchToProps)(Wallet);
