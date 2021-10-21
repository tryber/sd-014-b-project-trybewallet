import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from '../helpers/Input';
import Select from '../helpers/Select';
import { addExpenses } from '../actions/index';

class Expenditures extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      valor: 0,
      descrição: '',
      moeda: '',
      método_de_pagamento: '',
      tag: '',
    };
  }

  handleChange = ({ target: { id, value } }) => {
    this.setState({ [id]: value });
  }

  addId = (id) => this.setState({ id })

  render() {
    const { data, dispatchState, globalState: { wallet: { expenses } } } = this.props;
    const { handleChange, addId } = this;
    const
      { id,
        valor,
        descrição,
        moeda,
        método_de_pagamento: metodoDePagamento,
        tag,
      } = this.state;
    const paymentMetods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const requiredObject = {
      id,
      value: valor,
      currency: moeda,
      method: metodoDePagamento,
      tag,
      description: descrição,
    };
    return (
      <form>
        <Input name="valor" handleChange={ handleChange } />
        <Input name="descrição" handleChange={ handleChange } />
        <Select name="moeda" selectItems={ data } handleChange={ handleChange } />
        <Select
          name="método_de_pagamento"
          selectItems={ paymentMetods }
          handleChange={ handleChange }
        />
        <Select name="tag" selectItems={ tags } handleChange={ handleChange } />
        <button
          type="button"
          onClick={ () => {
            addId(expenses.length);
            requiredObject.id = expenses.length;
            dispatchState(requiredObject, expenses);
          } }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

Expenditures.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string),
  dispatchState: PropTypes.func.isRequired,
  globalState: PropTypes.objectOf(PropTypes.object).isRequired,
};

Expenditures.defaultProps = {
  data: ['BRL'],
};

const mapStateToProps = (state) => ({
  globalState: state,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchState: (state, expenses) => dispatch(addExpenses(state, expenses)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Expenditures);
