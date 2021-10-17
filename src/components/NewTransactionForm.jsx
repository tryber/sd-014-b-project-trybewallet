import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  fetchAPI as dispatchFetchAPI,
  addNewTransaction as dispatchAddNewTransaction } from '../actions';
import CategorySelect from './CategorySelect';
import CurrencyInput from './CurrencyInput';
import DescriptionInput from './DescriptionInput';
import PaymentMethodInput from './PaymentMethodInput';
import ValueInput from './ValueInput';
import styles from '../styles/newtransactionform.module.scss';

class NewTransactionForm extends Component {
  constructor() {
    super();

    this.state = {
      id: 0,
      value: 0,
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.resetInitialState = this.resetInitialState.bind(this);
  }

  componentDidMount() {
    const { fetchAPI } = this.props;
    fetchAPI();
  }

  resetInitialState() {
    this.setState((prevState) => ({
      id: prevState.id + 1,
      value: 0,
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
    }));
  }

  handleChange({ target: { value, name } }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { handleChange, resetInitialState } = this;
    const {
      value,
      currency,
      method,
      tag,
      description } = this.state;
    const { currencies, apiCurrenciesNow, addNewTransaction, fetchAPI } = this.props;

    return (
      <form className={ styles.newTransactionForm }>
        <ValueInput
          value={ value }
          handleChange={ handleChange }
        />
        <CurrencyInput
          value={ currency }
          handleChange={ handleChange }
          currencies={ currencies }
        />
        <PaymentMethodInput value={ method } handleChange={ handleChange } />
        <CategorySelect value={ tag } handleChange={ handleChange } />
        <DescriptionInput value={ description } handleChange={ handleChange } />
        <button
          type="button"
          onClick={ () => {
            fetchAPI();
            addNewTransaction({ ...this.state, exchangeRates: apiCurrenciesNow });
            resetInitialState();
          } }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapStateToProps = ({ wallet: { currencies, apiCurrenciesNow } }) => ({
  currencies,
  apiCurrenciesNow,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAPI: () => dispatch(dispatchFetchAPI()),
  addNewTransaction: (state) => dispatch(dispatchAddNewTransaction(state)),
});

NewTransactionForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  fetchAPI: PropTypes.func.isRequired,
  apiCurrenciesNow: PropTypes.objectOf(PropTypes.object).isRequired,
  addNewTransaction: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewTransactionForm);
