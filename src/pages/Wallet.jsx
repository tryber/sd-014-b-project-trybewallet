import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from '../Components/Input';
import Header from '../Components/Header';
import Select from '../Components/Select';

class Wallet extends Component {
  constructor() {
    super();

    this.state = {
      totalExpenses: 0,
    };
  }

  render() {
    const { props: { email }, state: { totalExpenses } } = this;
    const payments = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const categories = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

    return (
      <main className="wallet-page">
        <Header email={ email } totalExpenses={ totalExpenses } />
        <article className="container-form">
          <form className="form">
            <Input
              textLabel="Valor: "
              type="text"
              nameText="value"
              id="value"
            />

            <Input
              textLabel="Descrição: "
              type="text"
              nameText="description"
              id="description"
            />

            <Select textLabel="Moeda: " id="currency" />
            <Select
              textLabel="Método de pagamento: "
              id="payment"
              options={ payments }
            />

            <Select
              textLabel="Tag: "
              id="categories"
              options={ categories }
            />
          </form>
        </article>
      </main>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  return {
    email: state.user.email,
  };
}

export default connect(mapStateToProps, null)(Wallet);
