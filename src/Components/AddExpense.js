import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import Input from './Input';
import Select from './Select';
import { getCurrency } from '../actions';

import { tags, payment } from '../services/data';
import fetchApiCoins from '../services/requestApi';

class AddExpense extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      currency: '',
      method: '',
      tag: '',
      description: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.getCoins = this.getCoins.bind(this);
    // this.handleChange = this.handleChange.bind(this);
    // this.handleChange = this.handleChange.bind(this);
    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.getCoins();
  }

  async getCoins() {
    const { getCoinsApi } = this.props;
    const coins = await fetchApiCoins();
    getCoinsApi(coins);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  render() {
    const { value, currency, method, tag, description } = this.state;
    const { currencies } = this.props;
    return (
      <form>
        <Input
          labelName="Valor"
          type="number"
          name="value"
          value={ value }
          onChange={ this.handleChange }
        />
        <Select
          label="Moeda"
          name="currency"
          value={ currency }
          options={ currencies }
          onChange={ this.handleChange }
        />
        <Select
          label="Método de pagamento"
          name="paymentMethod"
          value={ method }
          options={ payment }
          onChange={ this.handleChange }
        />
        <Select
          label="Tag"
          name="tag"
          value={ tag }
          options={ tags }
          onChange={ this.handleChange }
        />
        <Input
          labelName="Descrição"
          type="text"
          name="description"
          value={ description }
          onChange={ this.handleChange }
        />
      </form>
    );
  }
}

AddExpense.propTypes = {
  getCoinsApi: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getCoinsApi: (currencies) => dispatch(getCurrency(currencies)),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps, mapDispatchToProps)(AddExpense);
