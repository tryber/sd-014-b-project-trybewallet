import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Tag from './Tag';
import Currency from './Currency';
import Description from './Description';
import PaymentOption from './PaymentOption';
import Value from './Value';
import {
  fetchAPI as dispatchFetchAPI,
  addNewTransaction as dispatchAddNewTransaction } from '../actions';

class Form extends Component {
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
    this.resetState = this.resetState.bind(this);
  }

  componentDidMount() {
    const { fetchAPI } = this.props;
    fetchAPI();
  }

  resetState() {
    this.setState((prevState) => ({
      id: prevState.id + 1,
      value: 0,
      currency: 'USD',
      paymentOption: 'Dinheiro',
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
    const { handleChange, resetState } = this;
    const { currencies, apiCurrencies, addNewTransaction, fetchAPI } = this.props;
    const {
      value,
      currency,
      paymentOption,
      tag,
      description } = this.state;
    return (
      <form>
        <Value
          value={ value }
          handleChange={ handleChange }
        />
        <Currency
          value={ currency }
          handleChange={ handleChange }
          currencies={ currencies }
        />
        <PaymentOption value={ paymentOption } handleChange={ handleChange } />
        <Tag value={ tag } handleChange={ handleChange } />
        <Description value={ description } handleChange={ handleChange } />
        <button
          type="button"
          onClick={ () => {
            fetchAPI();
            addNewTransaction({ ...this.state, exchangeRates: apiCurrencies });
            resetState();
          } }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapStateToProps = ({ wallet: { currencies, apiCurrencies } }) => ({
  currencies,
  apiCurrencies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAPI: () => dispatch(dispatchFetchAPI()),
  addNewTransaction: (state) => dispatch(dispatchAddNewTransaction(state)),
});

Form.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  fetchAPI: PropTypes.func.isRequired,
  apiCurrencies: PropTypes.objectOf(PropTypes.object).isRequired,
  addNewTransaction: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
