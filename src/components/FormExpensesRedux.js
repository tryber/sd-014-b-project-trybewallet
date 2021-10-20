import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const paymentMethods = ['', 'Dinheiro', 'Cartão de crédito', 'Cartão de débito'];

const expensesCategory = ['', 'Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

export default class FormExpensesRedux extends React.Component {
  render() {
    return (
      <h1>FormExpensesRedux</h1>
    );
  }
}
