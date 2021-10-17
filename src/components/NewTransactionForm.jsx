import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAPI as dispatchFetchAPI } from '../actions';
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
      transactionValue: 0,
      currency: 'USD',
      paymentMethod: 'Dinheiro',
      category: 'Alimentação',
      description: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { fetchAPI } = this.props;
    fetchAPI();
  }

  handleChange({ target: { value, name } }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { handleChange } = this;
    const {
      transactionValue,
      currency,
      paymentMethod,
      category,
      description } = this.state;
    const { currencies } = this.props;

    return (
      <form className={ styles.newTransactionForm }>
        <ValueInput
          value={ transactionValue }
          handleChange={
            ({ target: { value, name } }) => this.setState({ [name]: Number(value) })
          }
        />
        <CurrencyInput
          value={ currency }
          handleChange={ handleChange }
          currencies={ currencies }
        />
        <PaymentMethodInput value={ paymentMethod } handleChange={ handleChange } />
        <CategorySelect value={ category } handleChange={ handleChange } />
        <DescriptionInput value={ description } handleChange={ handleChange } />
      </form>
    );
  }
}

const mapStateToProps = ({ wallet: { currencies } }) => ({
  currencies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAPI: () => dispatch(dispatchFetchAPI()),
});

NewTransactionForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  fetchAPI: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewTransactionForm);
