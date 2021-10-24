import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Inputs from './Inputs';
import SelectCoin from './SelectCoin';

export default class FormWallet extends Component {
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
    // this.handleSubmitForm = this.handleSubmitForm.bind(this);
    this.handleChangeInputs = this.handleChangeInputs.bind(this);
  }

  handleChangeInputs({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  // handleSubmitForm() {

  // }

  render() {
    const { coins } = this.props;
    return (
      <div>
        <form>
          <Inputs
            handleChange={ this.handleChangeInputs }
            type="text"
            id="input-value"
            name="value"
            textLabel="Valor: "
          />
          <Inputs
            handleChange={ this.handleChangeInputs }
            type="text"
            id="2"
            name="description"
            textLabel="Descrição: "
          />
          <SelectCoin
            id="3"
            textLabel="Currency: "
            handleChange={ this.handleChangeInputs }
            nameSelect="currency"
            coins={ coins }
          />
          <label htmlFor="input-method">
            Método de pagamento
            <select id="input-method">
              <option value="dinheiro">Dinheiro</option>
              <option value="cartao-credito">Cartão de crédito</option>
              <option value="cartao-debito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="input-tag">
            Tag
            <select id="input-tag">
              <option value="alimentacao">Alimentação</option>
              <option value="lazer">Lazer</option>
              <option value="trabalho">Trabalho</option>
              <option value="transporte">Transporte</option>
              <option value="saude">Saúde</option>
            </select>
          </label>
          <button type="button">Adicionar dispesa</button>
        </form>
      </div>
    );
  }
}

FormWallet.propTypes = {
  coins: PropTypes.shape({
    map: PropTypes.func,
  }).isRequired,
};
